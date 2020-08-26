const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (context) => {
  if (context.request && context.request.headers.authentication) {
    const token = context.request.headers.authentication.split("Bearer ")[1];
    jwt.verify(token, config.get("jwtSecret"), (err, decodedToken) => {
      context.user = decodedToken;
    });
  }

  return context;
};
