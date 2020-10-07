const jwt = require("jsonwebtoken");
const config = require("config");
require("dotenv").config();

module.exports = (context) => {
  if (context.request && context.request.headers.authentication) {
    const token = context.request.headers.authentication.split("Bearer ")[1];
    jwt.verify(token, process.env.jwtSecret, (err, decodedToken) => {
      context.user = decodedToken;
    });
  }

  return context;
};
