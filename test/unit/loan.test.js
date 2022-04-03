const loanController = require("../../controller/loans");
const loanModel = require("../../models/Loan");
const httpMocks = require("node-mocks-http");
const newLoan = require("../data/new-loan.json");

loanModel.create = jest.fn();

let req, res, next;

beforeEach(()=>{
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
})

describe('Loan Controller Create', () => {
  beforeEach(()=>{
    req.body = newLoan
  })

  it('should have a createLoan function', () => {
    expect(typeof loanController.createLoan).toBe("function");
  })
  it('should call LoanModel.create', async () => {
    await loanController.createLoan(req, res, next);
    expect(loanModel.create).toBeCalledWith(newLoan);
  })
  it('should return 201 response code', async ()=>{
    await loanController.createLoan(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  })
  it('should return json body in response', async ()=>{
    loanModel.create.mockReturnValue(newLoan);
    await loanController.createLoan(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newLoan);
  })
})