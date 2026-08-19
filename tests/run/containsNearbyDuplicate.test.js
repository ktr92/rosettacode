const containsNearbyDuplicate = require('../../leetcode/slidingWindow/containsNearbyDuplicate');

test('[1,2,3,1], k=3', () => {
  expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);

});
test('[1,0,1,1], k = 1', () => {
  expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true);
});
test('[1,2,3,1,2,3], k = 2', () => {
  expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
});
test('[99,99], k = 2', () => {
  expect(containsNearbyDuplicate([99,99], 2)).toBe(true);
});
test('[1,2,1], k = 0', () => {
  expect(containsNearbyDuplicate([1,2,1], 0)).toBe(false);
});
test('[2,2], k = 3', () => {
  expect(containsNearbyDuplicate([2,2], 3)).toBe(true);
});
test('[1,2,3,4,5,6,7,8,9,10], k = 15', () => {
  expect(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10], 15)).toBe(false);
});
