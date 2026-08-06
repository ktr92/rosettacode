const validParentheses = require('../../leetcode/validParentheses');

test('()', () => {
  expect(validParentheses("()")).toBe(true);

});
test('()[]{}', () => {
  expect(validParentheses("()[]{}")).toBe(true);
});
test('(]', () => {
  expect(validParentheses("(]")).toBe(false);
});
test('([])', () => {
  expect(validParentheses("([])")).toBe(true);
});
test('([)]', () => {
  expect(validParentheses("([)]")).toBe(false);
});
test('[', () => {
  expect(validParentheses("[")).toBe(false);
});