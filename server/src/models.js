const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  password: {
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
const Entry = mongoose.model("entries", {
  food_entry: String,
  date: String,
});
const Journal = mongoose.model("journals", {});

module.exports = { Food, User, Entry, Journal };
