const loanModel = require("../models/Loan");

exports.createLoan = async (req, res, next) => {
  const createLoan = await loanModel.create(req.body);
  console.log(createLoan);
  res.status(201).json(createLoan);
};