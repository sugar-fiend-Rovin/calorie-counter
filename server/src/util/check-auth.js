const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (context) => {
  // context = { ... headers }
  console.log(context.accesstoken);
  const authHeader = context.accesstoken;
  if (authHeader) {
    // Bearer ....
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, config.get("jwtSecret"));
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
