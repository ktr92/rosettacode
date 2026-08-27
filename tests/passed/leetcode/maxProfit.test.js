const maxProfit = require('../../leetcode/dynamic/maxProfit');

test('[7,1,5,3,6,4]', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5);

});
test('[7,6,4,3,1]', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0);

});
