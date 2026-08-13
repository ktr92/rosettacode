const longestPalindrome = require('../../leetcode/longestPalindrome');


test('babad', () => {
  expect(longestPalindrome("babad")).toBe("bab");

});
test('cbbd', () => {
  expect(longestPalindrome("cbbd")).toBe("bb");

});


