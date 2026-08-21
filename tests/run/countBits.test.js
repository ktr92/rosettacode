const countBits = require('../../leetcode/dynamic/countBits');

/* test('n = 2', () => {
  expect(countBits(2)).toStrictEqual([0,1,1]);
}); */

test('n = 5', () => {
  expect(countBits(5)).toStrictEqual([0,1,1,2,1,2]);
});



