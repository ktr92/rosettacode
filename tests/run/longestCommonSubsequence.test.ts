import longestCommonSubsequence from './../../leetcode/dynamic/longestCommonSubsequence';

describe('longestCommonSubsequence', () => {
  test('Example 1', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  test('Example 2', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  test('Example 3', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  // Дополнительные тесты
  test('no common characters', () => {
    expect(longestCommonSubsequence('xyz', 'abc')).toBe(0);
  });

  test('one string is empty', () => {
    expect(longestCommonSubsequence('', 'abc')).toBe(0);
  });

  test('identical long strings', () => {
    expect(longestCommonSubsequence('aaaa', 'aaaaa')).toBe(4);
  });
});