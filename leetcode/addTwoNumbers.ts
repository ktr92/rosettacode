class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getNext(first: ListNode | null, second: ListNode | null) {
  if (first && first.next) {
    first = first.next;
  } else {
    if (second && second.next) {
      first = second.next;
    } else {
      first = null;
    }
  }
  return first;
}

function summNext(result: ListNode, l1: ListNode | null, l2?: ListNode | null) {
  if (!l1) {
    result = null
    return ;
  }
  let summ = l1.val;
  if (l2) {
    summ += l2.val;
  }
  
  result.val += summ - 10 >= 0 ? summ - 10 : summ;
  result.next = new ListNode(0, null);
  result.next.val = summ - 10 >= 0 ? 1 : 0;
  const nextNode = getNext(l1, l2) ? l1 : l2;
  if (nextNode?.next) {
    if (l2?.next) {
      summNext(result.next, nextNode.next, l2.next);
    } else {
      summNext(result.next, nextNode.next);
    }
  } else {
    result.next = null
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let result = new ListNode(0, null);
  summNext(result, l1, l2);
  console.log("result: ", result);

  return result;
}

module.exports = addTwoNumbers;
