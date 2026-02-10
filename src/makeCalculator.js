'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.operate = function (cb, n) {
    cb.call(this, n);

    return this;
  };

  calculator.add = function (n) {
    this.result += n;
  };

  calculator.subtract = function (n) {
    this.result -= n;
  };

  calculator.multiply = function (n) {
    this.result *= n;
  };

  calculator.divide = function (n) {
    this.result /= n;
  };

  calculator.reset = function () {
    this.result = 0;

    return this;
  };

  return calculator;
}

module.exports = makeCalculator;
