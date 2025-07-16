const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/produc_route.js");
require("dotenv").config();
const secrets = process.env;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/product", productRoutes);


app.get("/", (req, res) => {
  res.send("HI MY NAME IS, WHAT MY NAME IS, WHO MY NAME IS");
});

//mongodb connection
mongoose
  .connect(secrets.mongoUri)
  .then(() => {
    app.listen(3000, () => {
      console.log("Connected!");
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
