const lengthOfLongestSubstring = require('../../leetcode/lengthOfLongestSubstring');


test('abcabcbb', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);

});
test('bbbbb', () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);

});

test('pwwkew', () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);

});
test('eea', () => {
  expect(lengthOfLongestSubstring("eea")).toBe(2);
});
test('1R1T7', () => {
  expect(lengthOfLongestSubstring("1R1T7")).toBe(4);
});
test('ccbbcc', () => {
  expect(lengthOfLongestSubstring("ccbbcc")).toBe(2);
});

