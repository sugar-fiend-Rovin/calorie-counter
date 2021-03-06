const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
require("dotenv").config();

const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const db = process.env.mongoURI;
const jwt = require("express-jwt");
const { AuthenticationError } = require("apollo-server");
const contextMiddleware = require("./util/contextMiddleware");
console.log(process.env);
mongoose.connect(db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const port = process.env.Port;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: contextMiddleware,
});

// server.express.post("/hello", (req, res) => {
//   console.log(req.body);
//   const { name, password } = req.body;
//   if (!name || !password) {
//     return res.status(400).json({ msg: "Please enter all fiends" });
//   }
//   User.findOne({ email }).then((user) => {
//     if (user) return res.status(400).json({ msg: "User already exists" });
//     const newUser = new User({
//       name,
//       password,
//     });

//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(newUser.password, salt, (err, hash) => {
//         if (err) throw err;
//         newUser.password = hash;
//         newUser.save().then((user) => {
//           res.json({
//             user: {
//               id: user.id,
//               name: user.name,
//             },
//           });
//         });
//       });
//     });
//   });
// });
server.use(express.json());
mongoose.connection.once("open", () =>
  server.start(() => console.log("We make magic over at localhost:4000"))
);
