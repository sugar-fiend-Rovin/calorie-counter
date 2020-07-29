const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { User, Food } = require("../../models");
const auth = require("../../middleware/auth");
router.post("/", (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ msg: "Please enter all fiends" });
  }
  //check for existing user
  User.findOne({ name }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
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
// @route GET api/auth/user
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password") // disregard password
    .then((user) => res.json(user));
});
module.exports = router;
