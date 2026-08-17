const mergeAlternately = require('../../leetcode/mergeAlternately');

test('"abc", "pqr"', () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});
test('"ab", "pqrs"', () => {
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
});
test('"abcd", "pq"', () => {
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
});

