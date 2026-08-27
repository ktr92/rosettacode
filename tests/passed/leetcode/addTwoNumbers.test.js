const addTwoNumbers = require('../../leetcode/addTwoNumbers');

  class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

test('[2,4,3], [5,6,4]', () => {
  expect(addTwoNumbers({"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}, {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}})).toEqual(new ListNode(7, new ListNode(0, new ListNode(8, null))));

});

test('[2,4,9], [5,6,4,9]', () => {
  expect(addTwoNumbers({"val":2,"next":{"val":4,"next":{"val":9,"next":null}}}, {"val":5,"next":{"val":6,"next":{"val":4,"next":{"val":9,"next":null}}}})).toEqual(new ListNode(7, new ListNode(0, new ListNode(4, new ListNode(0, new ListNode(1,null))))))

});
/* test('[0], [0]', () => {
  expect(addTwoNumbers([0], [0])).toBe([0]);
});
test('[9,9,9,9,9,9,9], [9,9,9,9]', () => {
  expect(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])).toBe([8,9,9,9,0,0,0,1]);
}); */
