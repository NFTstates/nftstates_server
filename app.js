require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://nftstates:4254@nftstates.9lvwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    db = client.db("sample_geospatial");
    app.listen(process.env.PORT, function () {
      console.log("listening on 8080");
    });
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
