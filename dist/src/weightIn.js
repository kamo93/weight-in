"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = weightIn;
function weightIn(num) {

  var convertThis = num;
  var factor = 2.204;

  var toNumberTest = function toNumberTest(num) {
    if (!isNaN(num)) {
      return parseFloat(num);
    } else {
      return new TypeError(num + " is not number neither a string object");
    }
  };

  var kilograms = function kilograms() {
    try {
      var numToConvert = toNumberTest(convertThis);
      if (numToConvert !== 0) {
        return Number((numToConvert / factor).toFixed(3));
      } else {
        return 0;
      }
    } catch (err) {
      return err;
    }
  };

  var pounds = function pounds() {
    try {
      var numToConvert = toNumberTest(convertThis);
      return Number((numToConvert * factor).toFixed(3));
    } catch (err) {
      return err;
    }
  };

  return {
    kilograms: kilograms,
    pounds: pounds
  };
}