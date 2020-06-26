const express = require('express');
const app = express();
const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
