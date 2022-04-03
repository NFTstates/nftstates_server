require("dotenv").config();
const express = require("express");

const PORT = 8080;
const app = express();
const routes = require("./routes");
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }else{
      console.log('mongodb connected...')
    }
  }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/api/products", routes);
app.use("/api/loans", routes);

app.listen(PORT, ()=>{
  console.log(`Running on http://localhost:${PORT}`);
});


