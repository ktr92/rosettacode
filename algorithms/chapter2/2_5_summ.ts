import {
  createLinkedList,
  linkedListToArray,
  ListNode,
} from "../../structures/linkedList_simple";

function summList(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
  let result = new ListNode(0, null, null);
  const originalHead = result;

  let decimal = 0;
  while (a.next && b.next) {
    const summ = a.val + b.val + decimal;
    if (summ > 10) {
      result.val = summ - 10;
      decimal = 1;
    } else {
      result.val = summ;
    }
    console.log(result);
    result.next = new ListNode(0, null, null);
    result = result.next;
    a = a.next;
    b = b.next;
  }

  return originalHead;
}

const a = createLinkedList([7, 1, 6]);
const b = createLinkedList([5, 9, 2]);
console.log(linkedListToArray(summList(a, b))); // [2, 1, 9]

export default summList;
