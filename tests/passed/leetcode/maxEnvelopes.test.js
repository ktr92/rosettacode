const maxEnvelopes = require("../../leetcode/dynamic/maxEnvelopes");


test("[[5,4],[6,4],[6,7],[2,3]]]", () => {
  const nums = [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ];
  const result = maxEnvelopes(nums);
  expect(result).toBe(3);
});
