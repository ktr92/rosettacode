export type Comparator<T> = (a: T, b: T) => number;

export class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: Comparator<T>;

  constructor(compare: Comparator<T>) {
    this.compare = compare;
  }

  public size(): number {
    return this.heap.length;
  }

  public peek(): T | null {
    return this.heap[0] ?? null;
  }

  public insert(value: T): void {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  public extract(): T | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!; // Записываем последний элемент в корень
    this.siftDown(0);
    
    return root;
  }

  private getParentIndex(index: number): number { return Math.floor((index - 1) / 2); }
  private getLeftChildIndex(index: number): number { return 2 * index + 1; }
  private getRightChildIndex(index: number): number { return 2 * index + 2; }

  private siftUp(index: number): void {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);

    while (currentIndex > 0 && this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    } 
  }

  private siftDown(index: number): void {
    let current = index;
    const length = this.heap.length;

    while (true) {
      let leftIdx = this.getLeftChildIndex(current);
      let rightIdx = this.getRightChildIndex(current);
      let smallestIdx = current;

      if (leftIdx < length && this.compare(this.heap[leftIdx], this.heap[smallestIdx]) < 0) {
        smallestIdx = leftIdx;
      }

      if (rightIdx < length && this.compare(this.heap[rightIdx], this.heap[smallestIdx]) < 0) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === current) break;

      [this.heap[current], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[current]];
      current = smallestIdx;
    }
  }
}
