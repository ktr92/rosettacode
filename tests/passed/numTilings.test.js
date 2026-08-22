const numTilings = require("../../leetcode/dynamic/numTilings");


test("3", () => {
  const nums = 3;
  const result = numTilings(nums);
  expect(result).toBe(5);
});
test("4", () => {
  const nums = 4;
  const result = numTilings(nums);
  expect(result).toBe(11);
});

test("1", () => {
  const nums = 1;
  const result = numTilings(nums);
  expect(result).toBe(1);
});
test("5", () => {
  const nums = 5;
  const result = numTilings(nums);
  expect(result).toBe(24);
});
test("6", () => {
  const nums = 6;
  const result = numTilings(nums);
  expect(result).toBe(53);
});
