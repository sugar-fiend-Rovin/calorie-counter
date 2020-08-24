const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const db = config.get("mongoURI");
const jwt = require("express-jwt");
const { AuthenticationError } = require("apollo-server");
mongoose.connect(db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const port = process.env.Port || 5000;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (req) => {
    return {
      accesstoken: GetAccessToken(req.request),
    };
  },
});
const GetAccessToken = function (request) {
  const token = (request.headers.authorization || "").replace("BEARER ", "");
  return token;
};
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
