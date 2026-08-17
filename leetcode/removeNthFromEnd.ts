class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let left = head;
  let right = head;

  for (let i = 0; i < n; i++) {
    right = right?.next;
  }

  // вышли за пределы, двигаться некуда, удаляем вершину
  if (!right) {
   return left.next
  }



  while (right) {
    left.next.prev = left
    left = left?.next;
    right = right.next;
  }

  // дошли до конца и между левым и правым ничего нет - удаляем хвост

  if (left?.next?.next === null) {
   left.next = null;
   return head
  } 

  left.prev.next = right
  return head;
}

module.exports = removeNthFromEnd;
