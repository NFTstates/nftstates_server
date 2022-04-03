const express = require("express");
const router = express.Router();
const {hello} = require('./controller/loans')

router.get("/", hello);


module.exports = router;