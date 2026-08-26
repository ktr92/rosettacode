class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  get() {
    const head = this.head;
    if (!head) return null;
    this.head = head.next;
    return head.value;
  }
  peek() {
    return this.head ? this.head.value : undefined;
  }
  clear() {
    this.head = null;
  }
}

const s = new Stack();
s.add(1);
s.add(2);
console.log(s.get()); // 2
console.log(s.get()); // 1
console.log(s.get()); // undefined