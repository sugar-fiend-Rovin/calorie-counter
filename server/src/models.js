const mongoose = require("mongoose");
const User = mongoose.model("usersj", {
  username: { type: String, unique: true, dropDups: true },
  password: String,
  email: {
    type: String,
    unique: true,
    dropDups: true,
    validate: {
      validator: function (email) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: `not a valid email`,
    },
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
  username: String,
  food_entry: String,
  date: String,
  quantity: Number,
});

module.exports = { Food, User, Entry };
