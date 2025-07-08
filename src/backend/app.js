const express = require("express");
const dontenv = require("dotenv");
const connectDB = require("./models/db");
const app = express();

dontenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
