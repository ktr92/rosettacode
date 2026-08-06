const removeDuplicates = require('../../leetcode/removeDuplicates');
const _ = null
test('[0,0,1,1,1,2,2,3,3,4]', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe([0,1,2,3,4,_,_,_,_,_]);

});
test('[1,1,2]', () => {
  expect(removeDuplicates([1,1,2])).toBe([1,2,_]);
});
