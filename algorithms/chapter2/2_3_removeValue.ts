import { SinglyListNode } from "../../structures/linkedList_simple";

function removeValue(
  list: SinglyListNode<number> | null,
  value: SinglyListNode<number>,
) {
  if (!list) return;
  if (!value) return;
  if (list === value) {
    return;
  }

  let node = list;
  while (node.next !== value) {
    node = node.next;
  }
  node.next = node.next.next ? node.next.next : null;
}

export default removeValue;
