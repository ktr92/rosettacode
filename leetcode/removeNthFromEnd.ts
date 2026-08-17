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

  let prev = null

  while (right.next) {
    prev = left
    left = left.next;
    right = right.next;
    console.log(prev, left, right)
  }

  // дошли до конца и между левым и правым ничего нет - удаляем хвост

  if (left?.next?.next === null) {
   left.next = null;
   return head
  } 

  prev.next = left?.next

  console.log(JSON.stringify(head))
  return head;
}

module.exports = removeNthFromEnd;
