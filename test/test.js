const expect = require('chai').expect;
const weightIn = require('../dist/src/weightIn.js').default;

describe('weight-in', function() {

  it('If var is a number that represents 1 Kg answer must be 2.204 Ls', function(){
    const testToPounds = weightIn(1).pounds();
    expect(testToPounds).to.equal(2.204);
  });

  it('If var is a number that represents 1 Ls answer must be 0.45 Kg', function(){
    const testToKilograms = weightIn(1).kilograms();
    expect(testToKilograms).to.equal(0.454);
  });

});
