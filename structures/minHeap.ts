import { IBinaryTreeNode } from "./../types/binaryTreeNode.type";

export class MinHeap {
  private heap: number[] = [];

  insert(value: number) {
    this.heap.push(value);
    this.siftUp(value, this.heap.length - 1);
  }

  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }
  getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  extractMin() {
   const min = this.heap.shift();  

   const newRoot = this.heap.pop();

   if (!newRoot) return min;
   
   this.heap.unshift(newRoot);

   this.siftDown(0)

   return min;

  }

  // Посмотреть минимум без удаления O(1)
  public peek(): number | null {
    return this.heap[0] ?? null;
  }

  siftUp(value: number, index: number) {
    let parent = this.heap[this.getParentIndex(index)];
    if (typeof parent !== "undefined" && value < parent) {
      [parent, value] = [value, parent];
    }
  }

  siftDown(index: number) {
   let leftChild = this.heap[this.getLeftChildIndex(index)];
   let rightChild = this.heap[this.getRightChildIndex(index)];

   
  }
}

// === Пример использования ===
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(4);
minHeap.insert(15);
minHeap.insert(2);

console.log(minHeap.peek()); // Выведет: 2 (минимальный элемент)
console.log(minHeap.extractMin()); // Выведет: 2 (и удалит его)
console.log(minHeap.peek()); // Выведет: 4 (новый минимум)
