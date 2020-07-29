const { User, Food } = require("./models");

const resolvers = {
  Query: {
    getFoods: () => Food.find(),
    getFood: async (_, { food_name }) => {
      var result = await Food.findOne({ food_name: food_name });
      return result;
    },
    me(root, args, ctx) {
      return {
        name: "Who am I?",
      };
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
  },
};

module.exports = resolvers;
