class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  public head: Node | null;
  public tail: Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(element) {
    const node = new Node(element);
    const tail = this.tail;
    if (tail) {
     tail.next = node;
    } else {
     this.head = node;
    }
    this.tail = node;
  }

  dequeue(): Node | null {
    const head = this.head;
    if (!this.head) {
     this.tail = null
     return null
    }
    this.head = head.next;
    return head.value;
  }

  isEmpty() {
    return this.head === null; 
  }
}

export default Queue;
/* 
const a = new Queue();

a.enqueue(3);
a.enqueue(4);
a.enqueue(5);
a.enqueue(6);
a.enqueue(7);
console.log(a.dequeue());



console.log(a); */
