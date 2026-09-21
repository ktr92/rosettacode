
export class MinHeap {
  private heap: number[] = [];

  public insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
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
    const root = this.heap[0];

    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop();
      this.siftDown(0);
    }
    

    return root;
  }

  public size(): number {
    return this.heap.length;
  }

  public peek(): number | null {
    return this.heap[0] ?? null;
  }

  private siftUp(index: number) {
    let parentIndex = this.getParentIndex(index);
    while (this.heap[index] < this.heap[parentIndex]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    } 
  }

  private siftDown(index: number) {

    let current = index;

    while (true) {
      let leftIdx = this.getLeftChildIndex(current);
      let rightIdx = this.getRightChildIndex(current);
      let smallestIdx = current;

      // 1. Проверяем, существует ли левый потомок и меньше ли он текущего
      if (leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }

      // 2. Проверяем, существует ли правый потомок и меньше ли он, чем текущий/левый
      if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[smallestIdx]) {
        smallestIdx = rightIdx;
      }

      // Если наименьшим остался сам current, значит инвариант кучи соблюден — выходим
      if (smallestIdx === current) {
        break;
      }

      [this.heap[current], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[current]];
       current = smallestIdx;

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
