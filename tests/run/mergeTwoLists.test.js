const mergeTwoLists = require('../../leetcode/mergeTwoLists');

test('[1,2,4], [1,3,4]', () => {
  expect(mergeTwoLists([1,2,4], [1,3,4])).toBe([1,1,2,3,4,4]);

});
test('[], []', () => {
  expect(mergeTwoLists([], [])).toBe([]);
});
test('[], [0]', () => {
  expect(mergeTwoLists([], [0])).toBe([0]);
});
