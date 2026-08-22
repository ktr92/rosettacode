const canJump = require("../../leetcode/canJump");


test("[2,3,1,1,4]", () => {
  const nums = [2,3,1,1,4];
  const result = canJump(nums);
  expect(result).toBe(true);
});

test("[3,2,1,0,4]", () => {
  const nums = [3,2,1,0,4];
  const result = canJump(nums);
  expect(result).toBe(false);
});
test("[2,0]", () => {
  const nums = [2,0];
  const result = canJump(nums);
  expect(result).toBe(true);
});
