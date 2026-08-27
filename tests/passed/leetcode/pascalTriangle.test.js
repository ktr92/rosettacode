const pascalTriangle = require('../../leetcode/dynamic/pascalTriangle');

test('5', () => {
  expect(pascalTriangle(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});

test('1', () => {
  expect(pascalTriangle(1)).toStrictEqual([[1]]);
});



