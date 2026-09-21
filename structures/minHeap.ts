
export class MinHeap {
  private heap: number[] = [];

  public insert(value: number) {
    this.heap.push(value);
    this.siftUp(value, this.heap.length - 1);
    console.log(this.heap)
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }
  private getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  public extractMin() {
    const min = this.heap.shift();

    const newRoot = this.heap.pop();

    if (!newRoot) return min;

    this.heap.unshift(newRoot);

    this.siftDown(0);

    return min;
  }

  // Получить текущий размер кучи
  public size(): number {
    return this.heap.length;
  }

  // Посмотреть минимум без удаления O(1)
  public peek(): number | null {
    return this.heap[0] ?? null;
  }

  private siftUp(value: number, index: number) {
    let parent = this.heap[this.getParentIndex(index)];
    if (typeof parent !== "undefined" && value < parent) {
      [parent, value] = [value, parent];
    }
  }

  private siftDown(index: number) {
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    let leftChild = this.heap[leftChildIndex];
    let rightChild = this.heap[rightChildIndex];
    let current = index;

    while (
      this.heap[current] > this.heap[leftChild] ||
      this.heap[current] > this.heap[rightChild]
    ) {
      if (this.heap[current] > leftChild) {
        [leftChild, this.heap[current]] = [this.heap[current], leftChild];
        current = leftChild;
      } else if (this.heap[current] > rightChild) {
        [rightChild, this.heap[current]] = [this.heap[current], rightChild];
      }

      leftChildIndex = this.heap[this.getLeftChildIndex(current)];
      rightChildIndex = this.heap[this.getRightChildIndex(current)];

      leftChild = this.heap[leftChildIndex];
      rightChild = this.heap[rightChildIndex];
    }
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
