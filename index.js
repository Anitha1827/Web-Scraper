const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// import importData from './webmodels/product.js'
require("dotenv").config();

//configue the environment
const PORT = 9000 || process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/auth.js");
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://anitha1827:anitha1827@cluster1.mszk2mo.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
