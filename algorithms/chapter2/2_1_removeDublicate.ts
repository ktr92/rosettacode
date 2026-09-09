import { ListNode } from "../../structures/linkedList_simple";

function removeDublicates(list: ListNode<number>) {
  const values = new Set();
  let node = list;
  while (node.next) {
    if (values.has(node.val)) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    } else {
      values.add(node.val);
    }
    node = node.next;
  }
  return list;
}

export default removeDublicates;
