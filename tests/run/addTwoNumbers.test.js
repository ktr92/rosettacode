const addTwoNumbers = require('../../leetcode/addTwoNumbers');

test('[2,4,3], [5,6,4]', () => {
  expect(addTwoNumbers({"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}, {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}})).toBe({"val":8,"next":{"val":0,"next":{"val":7,"next":null}}});

});
/* test('[0], [0]', () => {
  expect(addTwoNumbers([0], [0])).toBe([0]);
});
test('[9,9,9,9,9,9,9], [9,9,9,9]', () => {
  expect(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])).toBe([8,9,9,9,0,0,0,1]);
}); */
