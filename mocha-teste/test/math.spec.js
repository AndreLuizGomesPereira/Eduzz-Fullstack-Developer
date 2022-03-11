// const assert = require("assert"); Foi utilizado apenas para testes com o Mocha
const Math = require("../src/math");
const expect = require("chai").expect;
const sinon = require("sinon");

let value = 0;

describe("Math class", () => {
  // hooks
  beforeEach(function () {
    let value = 0;
  });

  it("Sum two numbers", function (done) {
    const math = new Math();

    math.sum(value, 5, (value) => {
      expect(value).to.equal(5);
      done();
    });
  });
  it("Multiply two numbers", function () {
    const math = new Math();
    const obj = {
      name: "André Luiz Gomes Pereira",
    };

    expect(obj).to.have.property("name").equal("André Luiz Gomes Pereira");
    // expect(math.multiply(value, 5)).to.equal(0); calcula o valor e compara com o valor esperado
  });

  it("Compare two objects", function () {
    const obj = {
      name: "André Luiz Gomes Pereira",
    };
    const obj2 = {
      name: "André Luiz Gomes Pereira",
    };

    expect(obj).to.deep.equal(obj2);
  });

  it.only("Calls res with sum and index values", function () {
    const req = {};
    const res = {
      // load: sinon.spy(),
      load: function() {
        console.log("load called");
      }
    };

    sinon.spy(res, "load");
    const math = new Math();

    math.printSum(req, res, 5,5);

    expect(res.load.args[0][1]).to.equal(10);
  });
});
