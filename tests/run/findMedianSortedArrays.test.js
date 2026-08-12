const findMedianSortedArrays = require('../../leetcode/findMedianSortedArrays');

test('[1,3], [2]', () => {
  expect(findMedianSortedArrays([1,3], [2])).toBe(2);

});
test('[1,2], [3,4]', () => {
  expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
});
test('[0,0,0,0,0], [-1,0,0,0,0,0,1]', () => {
  expect(findMedianSortedArrays([0,0,0,0,0], [-1,0,0,0,0,0,1])).toBe(0);
});
test('[1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]', () => {
  expect(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toBe(9);
});

