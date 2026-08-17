const isPalindrome = require('../../leetcode/isPalindrome');

test('A man, a plan, a canal: Panama', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);

});
test('race a car', () => {
  expect(isPalindrome("race a car")).toBe(false);
});
test("Marge, let's \"[went].\" I await {news} telegram.", () => {
  expect(isPalindrome("Marge, let's \"[went].\" I await {news} telegram.")).toBe(true);
});
test('ab_a', () => {
  expect(isPalindrome("ab_a")).toBe(true);
});
