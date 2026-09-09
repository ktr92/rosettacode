import { SinglyListNode } from "../../structures/linkedList_simple";

function findEnd(list: SinglyListNode<number> | null, k: number) {
  if (!list) return null;
  if (k <= 0) return null;
  let fast = list;
  let slow = list;

  let i = 1;
  while (fast.next && i <= k) {
    fast = fast.next;
    i++
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  console.log(slow.val)
  return slow;
}

export default findEnd;
