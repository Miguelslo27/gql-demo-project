const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 2020;
const { User, Recipe } = require('./models');

require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connection stablished'))
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
