const getRow = require('../../leetcode/dynamic/getRow');

test('3', () => {
  expect(getRow(3)).toStrictEqual([1,3,3,1]);
});

test('0', () => {
  expect(getRow(0)).toStrictEqual([1]);
});
test('1', () => {
  expect(getRow(1)).toStrictEqual([1,1]);
});
test('4', () => {
  expect(getRow(4)).toStrictEqual([1,4,6,4,1]);
});
test('5', () => {
  expect(getRow(5)).toStrictEqual([1,5,10,10,5,1]);
});



