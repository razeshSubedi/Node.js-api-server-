const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
require("dotenv").config();
const secrets = process.env;
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, this is!");
});


// Get all products
app.get("/api/products", async (req, res) => {
    try{
       const products =  await Product.find({});
       res.status(200).json(products);
    }catch (error) {
    res.status(500).json({ message: error.message });
    }
});


// Get a single product by ID
app.get("/api/product/:id", async (req, res) => {
    try {
         const {id} = req.params;
       const product =  await Product.findById(id);
       res.status(200).json(product);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//add a product

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    secrets.mongoUri
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Connected!");
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
