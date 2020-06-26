const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const { User, Recipe } = require('./models');
const { typeDefs, resolvers } = require('./graphql-config');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 2020;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Recipe,
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connection stablished'))
  .catch(console.error);

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/${server.graphqlPath}`);
});
