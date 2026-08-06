/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let count = 1;

  while (count) {
    if (list1.val <= list2.val) {
      let tmp = list1.next;
      list1.next = list2
      list2.next = tmp;
    } 

    if (!list2?.next || !list1?.next) count = 0;

  }

  return list1;
}

module.exports = mergeTwoLists;
