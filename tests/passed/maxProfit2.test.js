const maxProfit2 = require('../../leetcode/dynamic/maxProfit2');

test('[7,1,5,3,6,4]', () => {
  expect(maxProfit2([7,1,5,3,6,4])).toBe(7);

});
test('[1,2,3,4,5]', () => {
  expect(maxProfit2([1,2,3,4,5])).toBe(4);

});
test('[7,6,4,3,1]', () => {
  expect(maxProfit2([7,6,4,3,1])).toBe(0);

});
test('[2,1,2,0,1]', () => {
  expect(maxProfit2([2,1,2,0,1])).toBe(2);

});
