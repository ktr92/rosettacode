import {
  createSinglyLinkedList,
  SinglyListNode,
} from "../../structures/linkedList_simple";

function cycleNodeHash(head: SinglyListNode<string>): SinglyListNode<string> {
  const visited = new Set();
  let current = head;
  while (!visited.has(current) && current) {
    if (!current) return null;
    visited.add(current);
    current = current.next;
  }
  return current;

}
function cycleNode(head: SinglyListNode<string>): SinglyListNode<string> {
 
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
   fast = fast.next.next;
   slow = slow.next;

   if (fast === slow) {
    break
   }
  }

  if (!fast || !fast.next) {
   return null
  } 

  let start = head;
  let meet = fast;

  while (meet !== start) {
   meet = meet.next;
   start = start.next
  }
  return start
}

export default cycleNode;
