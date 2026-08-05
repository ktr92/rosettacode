const intToRoman = require('../../leetcode/int_to_roman');

test('3749', () => {
  expect(intToRoman(3749)).toBe("MMMDCCXLIX");

});
test('58', () => {
  expect(intToRoman(58)).toBe("LVIII");
});
test('1994', () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});