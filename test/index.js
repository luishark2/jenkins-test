const assert = require('assert');
const sum = require('../index');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('should handle negative numbers', () => {
    assert.equal(sum(-2, -3), -5);
  });

  it('should handle decimals', () => {
    assert.equal(sum(2.5, 3.5), 6);
  });
});
