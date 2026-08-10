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

function summNext(l1, l2, result) {
  let first = l1 as ListNode;
  let second = l2 as ListNode;
  let summ = first.val;
  if (second) {
    summ += second.val;
  }
  result.next = new ListNode(0, null);
  result.val += summ - 10 >= 0 ? summ - 10 : summ;
  result.next.val = summ - 10 >= 0 ? 1 : 0;
  current = result.next;
  console.log("result: ", JSON.stringify(result));

  if (!l1.next) {
    console.log("result: ", JSON.stringify(result));
    return result;
  }

  result.next = summNext(l1.next, l2.next, result);
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let result = new ListNode(0, null);
  return summNext(l1, l2, result);
}

module.exports = addTwoNumbers;
