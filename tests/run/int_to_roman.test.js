const intToRoman = require('../../leetcode/int_to_roman');

test('III', () => {
  expect(intToRoman(3749)).toBe("MMMDCCXLIX");

});
test('LVIII', () => {
  expect(intToRoman(58)).toBe("LVIII");
});
test('MCMXCIV', () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});