import {
  createSinglyLinkedList,
  SinglyListNode,
} from "../../structures/linkedList_simple";

function isPalindrome(head: SinglyListNode<number>): boolean {
  if (!head.next) return true;
  if (head.next.val === head.val && !head.next.next) return true;

  let slow = head;
  let fast = head;

  // get mid
  while (fast.next) {
    fast = fast.next.next ? fast.next.next : fast.next;
    slow = slow.next ? slow.next : slow;
  }

  // reverse
  let prev = null;

  while (slow) {
   let next = slow.next;
   slow.next = prev;
   prev = slow;
   slow = next;
  }

  let reversed = prev;
  // compare
  
  while (reversed?.next || head.next) {
   if (reversed?.val !== head.val) return false;
   reversed = reversed.next;
   head = head.next
  }

  return true;
}

const a = createSinglyLinkedList([1, 2, 2, 1]);
const b = createSinglyLinkedList([1, 2, 3, 2, 1]);
const c = createSinglyLinkedList([1, 2, 3, 4, 5]);

console.log(isPalindrome(a)); // true
console.log(isPalindrome(b));  // true
console.log(isPalindrome(c)); // false

export default isPalindrome;
