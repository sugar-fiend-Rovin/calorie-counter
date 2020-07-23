const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rovin:041799@food.ycrjs.mongodb.net/food-database?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
const server = new GraphQLServer({ typeDefs, resolvers });

mongoose.connection.once("open", () =>
  server.start(() => console.log("We make magic over at localhost:4000"))
);
