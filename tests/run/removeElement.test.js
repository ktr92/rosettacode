const removeElement = require('../../leetcode/removeElement');
const _ = null
test('[3,2,2,3], 3', () => {
  expect(removeElement([3,2,2,3], 3)).toBe(2);

});
test('[0,1,2,2,3,0,4,2], 2', () => {
  expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5);
});
