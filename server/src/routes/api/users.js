const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { Food, User, Entry, Journal } = require("../../models");

router.post("/", (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ msg: "Please enter all fiends" });
  }
  User.findOne({ name }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      name,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            {
              expiresIn: 1800,
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
