const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 2020;
const User = require('./models/User');
const Recipe = require('./models/Recipe');

require('dotenv').config({ path: 'vars.env' });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connection stablished'))
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
