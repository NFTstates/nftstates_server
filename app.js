require("dotenv").config();

const express = require("express");
// const path = require("path");

// Constants
const PORT = 8080;

// APP
const app = express();
const productRoutes = require("./routes");
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

MongoClient.connect(
  process.env.MONGODB_URI,
  (err) => {
    if (err) {
      console.log(err);
    }else{
      console.log('mongodb connected...')
    }
  }
);
app.listen(PORT, ()=>{
  console.log(`Running on http://localhost:${PORT}`);
});


