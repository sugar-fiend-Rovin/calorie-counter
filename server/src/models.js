const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
});
const Food = mongoose.model("menu-items", {
  food_name: String,
  type: String,
  calories: Number,
  carbohydrates: Number,
  proteins: Number,
  fats: Number,
});
module.exports = { Food, User };
