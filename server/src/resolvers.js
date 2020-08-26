const { Food, User, Entry } = require("./models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { AuthenticationError } = require("apollo-server");

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
    getEntries: async (_, { date }, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        var result = await Entry.find({
          username: user.user.username,
          date: date,
        });
        return result;
      } catch (err) {
        throw err;
      }
    },

    getFoods: async (_, __, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        return Food.find();
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    getFood: async (_, { food_name }) => {
      var result = await Food.findOne({ food_name: food_name });
      return result;
    },
    login: async (_, args) => {
      const { username, password } = args;
      let errors = {};

      try {
        if (username.trim() === "")
          errors.username = "username must not be empty";
        if (password === "") errors.password = "password must not be empty";

        if (Object.keys(errors).length > 0) {
          throw new UserInputError("bad input", { errors });
        }

        const user = await User.findOne({
          username,
        });

        if (!user) {
          errors.username = "user not found";
          throw new UserInputError("user not found", { errors });
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
          errors.password = "password is incorrect";
          throw new UserInputError("password is incorrect", { errors });
        }

        const token = jwt.sign({ username }, config.get("jwtSecret"), {
          expiresIn: 60 * 60,
        });

        return {
          ...user.toJSON(),
          token,
        };
      } catch (err) {
        console.log(err);
        throw err;
      }
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
    createEntry: async (_, { date, food_entry, quantity }, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        const entry = new Entry({
          username: user.user.username,
          date,
          food_entry,
          quantity,
        });
        await entry.save();
        return entry;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    deleteEntry: async (_, { food_entry, date }, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        await Entry.deleteOne({
          username: user.user.username,
          food_entry: food_entry,
          date: date,
        });
        return "food deleted";
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    updateEntryPlus: async (_, { username, food_entry, date }, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        return await Entry.findOneAndUpdate(
          { username: user.user.username, food_entry: food_entry, date: date },
          { $inc: { quantity: 1 } },
          {
            new: true,
          }
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    updateEntryMinus: async (_, { username, food_entry, date }, user) => {
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");

        return await Entry.findOneAndUpdate(
          { username: user.user.username, food_entry: food_entry, date: date },
          { $inc: { quantity: -1 } },
          {
            new: true,
          }
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    // Handle user signup

    register: async (_, args) => {
      let { username, email, password, confirmPassword } = args;
      let errors = {};

      try {
        // Validate input data
        if (email.trim() === "") errors.email = "email must not be empty";
        if (username.trim() === "")
          errors.username = "username must not be empty";
        if (password.trim() === "")
          errors.password = "password must not be empty";
        if (confirmPassword.trim() === "")
          errors.confirmPassword = "repeat password must not be empty";

        if (password !== confirmPassword)
          errors.confirmPassword = "passwords must match";

        // // Check if username / email exists
        // const userByUsername = await User.findOne({ where: { username } })
        // const userByEmail = await User.findOne({ where: { email } })

        // if (userByUsername) errors.username = 'Username is taken'
        // if (userByEmail) errors.email = 'Email is taken'

        if (Object.keys(errors).length > 0) {
          throw errors;
        }

        // Hash password
        password = await bcrypt.hash(password, 6);

        // Create user
        const user = await User.create({
          username,
          email,
          password,
        });

        // Return user
        return user;
      } catch (err) {
        if (err.name === "MongoError" && err.code === 11000) {
          errors[Object.keys(err.keyValue)[0]] = `${
            Object.keys(err.keyValue)[0]
          } is already taken`;
        } else if (err.name === "ValidationError") {
          errors[
            err.errors.email.properties.path
          ] = `${err.errors.email.properties.message}`;
        }
        throw new UserInputError("Bad input", { errors });
      }
    },
  },
};

module.exports = resolvers;
