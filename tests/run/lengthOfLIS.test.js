const lengthOfLIS = require('../../leetcode/sorting/lengthOfLIS');

test('[10,9,2,5,3,7,101,18]', () => {
  const nums  = [10,9,2,5,3,7,101,18];
  const result = lengthOfLIS(nums);
  expect(result).toBe(4);
});
test('[0,1,0,3,2,3]', () => {
  const nums  = [0,1,0,3,2,3];
  const result = lengthOfLIS(nums);
  expect(result).toBe(4);
});
test('[7,7,7,7,7,7,7]', () => {
  const nums  = [7,7,7,7,7,7,7];
  const result = lengthOfLIS(nums);
  expect(result).toBe(1);
});


