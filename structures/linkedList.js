class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addEnd(value) {
    const node = new Node(value);
    if (!this.tail) {
      // если пусто

      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  }
  addStart(value) {
    const node = new Node(value);
    if (!this.head) {
      // если пусто
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
  }
  removeEnd() {
    if (!this.tail) return null;
    let removed = this.tail;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return removed.value;
  }
  removeStart() {
    if (!this.head) return null;
    let removed = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.next = null;
    }
    return removed.value;
  }
  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

const list = new NodeList();

list.addEnd(1);
list.addEnd(2);
list.addStart(0);

console.log(list.removeEnd()); // 2
console.log(list.removeStart()); // 0
console.log(list.removeStart()); // 1
console.log(list.removeEnd()); // undefined (пустой список)
