const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const { User, Recipe } = require('./models');
const { typeDefs, resolvers } = require('./graphql-config');

require('dotenv').config();

const app = express();
const path = '/graphql';
const PORT = process.env.PORT || 4120;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Recipe,
  }
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection stablished'))
  .catch(console.error);

server.applyMiddleware({ app, path });

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
