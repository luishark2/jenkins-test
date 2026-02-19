const sum = require('../');
const assert = require('assert');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    asser.equals(sum(3, 5), 8);
  });
  it('should handle negative numbers', () => {
    asser.equals(sum(3, -5), -2);
  });
  it('should handle decimals', () => {
    asser.equals(sum(3.5, 7.1), 10.6);
  });
});
