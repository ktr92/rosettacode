import longestCommonSubsequence from './../../leetcode/dynamic/longestCommonSubsequence';

describe('longestCommonSubsequence', () => {
  test("'aaxyzbcd', 'abcxyzd'", () => {
    expect(longestCommonSubsequence('aaxyzbcd', 'abcxyzd')).toBe(5);
  });
  test("'abcde', 'ace'", () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  test("'abc', 'abc'", () => {
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
  test("'bl', 'yby'", () => {
    expect(longestCommonSubsequence('bl', 'yby')).toBe(1);
  });
  test("'ezupkr', 'ubmrapg'", () => {
    expect(longestCommonSubsequence('ezupkr', 'ubmrapg')).toBe(2);
  });
});