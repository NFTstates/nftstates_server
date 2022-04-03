const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
})

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;