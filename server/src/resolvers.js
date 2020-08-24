const { Food, User, Entry } = require("./models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("./util/validators");
const checkAuth = require("./util/check-auth");

const { UserInputError } = require("apollo-server");

function generateToken(user) {
  console.log(config.get("jwtSecret"));
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    config.get("jwtSecret"),
    { expiresIn: "1h" }
  );
}
const resolvers = {
  Query: {
    getEntries: async (_, { date }) => {
      const user = checkAuth(context);

      var result = await Entry.find({ username: user.username, date: date });
      return result;
    },

    getFoods: () => Food.find(),

    getFood: async (_, { food_name }) => {
      var result = await Food.findOne({ food_name: food_name });
      return result;
    },
  },

  Entry: {
    food_en: async ({ food_entry }) => {
      return Food.findOne({ food_name: food_entry });
    },
  },

  Mutation: {
    addFood: async (
      _,
      { food_name, type, calories, carbohydrates, proteins, fats }
    ) => {
      const food = new Food({
        food_name,
        type,
        calories,
        carbohydrates,
        proteins,
        fats,
      });
      await food.save();
      return food;
    },
    deleteFood: async (_, { id }) => {
      await Food.findByIdAndRemove(id);
      return "Food deleted";
    },
    createEntry: async (_, { date, food_entry, quantity }, context) => {
      const user = checkAuth(context);
      console.log(user);
      const entry = new Entry({
        username: user.username,
        date,
        food_entry,
        quantity,
      });
      await entry.save();
      return entry;
    },
    deleteEntry: async (_, { username, food_entry, date }) => {
      const user = checkAuth(context);

      await Entry.deleteOne({
        username: user.username,
        food_entry: food_entry,
        date: date,
      });
      return "Food deleted";
    },
    updateEntryPlus: async (_, { username, food_entry, date }) => {
      const user = checkAuth(context);

      return await Entry.findOneAndUpdate(
        { username: user.username, food_entry: food_entry, date: date },
        { $inc: { quantity: 1 } },
        {
          new: true,
        }
      );
    },
    updateEntryMinus: async (_, { username, food_entry, date }) => {
      const user = checkAuth(context);

      return await Entry.findOneAndUpdate(
        { username: user.username, food_entry: food_entry, date: date },
        { $inc: { quantity: -1 } },
        {
          new: true,
        }
      );
    },

    // Handle user signup
    login: async (_, { username, password }) => {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    register: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};

module.exports = resolvers;
