const mongoose = require("mongoose");
const User = mongoose.model("users", {
  username: String,
  password: String,
  email: String,
});

const Food = mongoose.model("menu-items", {
  food_name: String,
  type: String,
  calories: Number,
  carbohydrates: Number,
  proteins: Number,
  fats: Number,
});

const Entry = mongoose.model("entries", {
  username: String,
  food_entry: String,
  date: String,
  quantity: Number,
});

module.exports = { Food, User, Entry };
