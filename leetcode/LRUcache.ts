/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
 */

/** */
class LinkedNode {
  public next: LinkedNode | null = null;
  public prev: LinkedNode | null = null;
  public key: number;
  public value: number;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, LinkedNode>;
  private head: LinkedNode;
  private tail: LinkedNode;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("LRU cache must be positive number");
    }
    if (capacity > 3000) {
      throw new Error("LRU cache maximum size is 3000");
    }
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new LinkedNode(0, 0);
    this.tail = new LinkedNode(0, 0);
  }

  private addItem(key: number, value: number) {
    this.cache.set(key, {
      key,
      value,
      next: null,
      prev: null,
    });
  }
  private updateItem(
    key: number,
    value: number,
    prev: null | LinkedNode = null,
    next: null | LinkedNode = null,
  ) {
    this.cache.set(key, {
      key,
      value,
      next,
      prev,
    });
  }
  public getSize(val: string) {
    console.log("========================================");
    return "val: " + val;
    //console.log("head: ", this.head);
    //console.log("tail: ", this.tail);
    /*     return `size: ${this.cache.size}, cache: ${this.cache.}, tail: ${this.tail.key}`;
     */ 
    /* return this.cache; */
  }
  private changeHead(key: number) {
    const head = this.head;
    const newFirst = this.cache.get(key);

    if (newFirst && head.key !== newFirst.key) {
      // старый ссылается назад на новый
      head.prev = newFirst;
      // если новый стоял за старым, то надо чтобы старый ссылался вперед на то, на что ссылался новый

      // если новый уже был
      if (newFirst.next || newFirst.prev) {
        const nextForNewFirst = newFirst.next;
        const prevForNewFirst = newFirst.prev;

        if (nextForNewFirst) {
          nextForNewFirst.prev = prevForNewFirst;
        }
        if (prevForNewFirst) {
          // если новый был хвостом, то новый хвост это его предшественник
          if (newFirst.key === this.tail.key) {
            this.tail = prevForNewFirst;
          }
          prevForNewFirst.next = nextForNewFirst;
        }
      }

      // Новый ссылается вперед на старый
      newFirst.next = head;
      newFirst.prev = null;
      this.head = newFirst;
      this.head.prev = null;
    }
  }

  get(key: number): number {
    const value = this.cache.get(key);
    if (!value) {
      console.log(this.getSize((key + ': ' + -1)));
      return -1;
    } else {
      this.changeHead(key);
      console.log(this.getSize(key + ': ' + value.value));
      return value.value;
    }
  }

  put(key: number, value: number): void {
    const cacheSize = this.cache.size;
    if (cacheSize > 0) {
      
      const exist = this.cache.get(key);
      if (typeof exist !== "undefined") {
        this.updateItem(key, value, exist.prev, exist.next);
        this.changeHead(key);
      } else {
        
        if (cacheSize >= this.capacity) {
          const oldTail = this.tail;
          const newTail = oldTail.prev;
          if (oldTail && newTail) {
            this.tail = newTail;
            newTail.next = null;
          }
          this.cache.delete(oldTail.key);
        }
        
        this.addItem(key, value);
        this.changeHead(key);
      }
    } else {
      this.addItem(key, value);
      const newel = this.cache.get(key);
      if (newel) {
        this.tail = newel;
        this.head = newel;
      }
    }
    //console.log(this.getSize());
  }
}

const lRUCache = new LRUCache(10);
lRUCache.put(10, 13);
lRUCache.put(3, 17);
lRUCache.put(6, 11);
lRUCache.put(10, 5);
lRUCache.put(9, 10);
lRUCache.get(13);
lRUCache.put(2, 19);
lRUCache.get(2);
lRUCache.get(3);
lRUCache.put(5, 25);
lRUCache.get(8);
lRUCache.put(9, 22);
lRUCache.put(5, 5);
lRUCache.put(1, 30);
lRUCache.get(11);
lRUCache.put(9, 12);
lRUCache.get(7);
lRUCache.get(5);
lRUCache.get(8);
lRUCache.get(9);
lRUCache.put(4, 30);
lRUCache.put(9, 3);
lRUCache.get(9);
lRUCache.put(10, 11);
lRUCache.put(8, 14);
lRUCache.get(2);
lRUCache.put(1, 1);
lRUCache.get(5);
lRUCache.put(4, 4);
lRUCache.get(11);
lRUCache.put(12, 24);
lRUCache.put(5, 18);
lRUCache.put(13, 4);
lRUCache.put(7, 23);
lRUCache.get(8);
lRUCache.put(12, 14);
lRUCache.get(3);
lRUCache.put(2, 12);
lRUCache.get(5);
lRUCache.put(2, 9);
lRUCache.put(13, 4);
lRUCache.put(8, 18);
lRUCache.put(1, 7);
lRUCache.get(6);
lRUCache.put(9, 29);
lRUCache.put(8, 21);
lRUCache.put(5, 0);
lRUCache.put(6, 30);
lRUCache.put(1, 12);
lRUCache.get(10);
lRUCache.put(4, 15);
lRUCache.put(7, 22);
lRUCache.put(11, 26);
lRUCache.put(8, 17);
lRUCache.put(9, 29);
lRUCache.put(5, 0);
lRUCache.get(3);
lRUCache.put(11, 30);
lRUCache.get(12);
lRUCache.put(4, 29);
lRUCache.get(3);
lRUCache.get(9);
lRUCache.put(6, 0);
lRUCache.get(3);
lRUCache.put(1, 0);
lRUCache.get(10);
lRUCache.put(3, 29);
lRUCache.put(10, 28);
lRUCache.put(1, 20);
lRUCache.put(11, 13);
lRUCache.get(3);
lRUCache.get(3);
lRUCache.get(3);
lRUCache.put(10, 9);
lRUCache.put(3, 26);
lRUCache.get(8);
lRUCache.get(7);
lRUCache.put(5, 2);
lRUCache.put(13, 17);
lRUCache.put(2, 27);
lRUCache.put(11, 15);
lRUCache.get(12);
lRUCache.put(9, 19);
lRUCache.put(2, 15);
lRUCache.put(3, 16);
lRUCache.get(1);
lRUCache.put(12, 17);
lRUCache.put(9, 1);
lRUCache.put(6, 19);
lRUCache.put(4, 0);
lRUCache.put(5, 0);
lRUCache.put(5, 2);
lRUCache.put(8, 1);
lRUCache.put(11, 7);
lRUCache.put(5, 2);
lRUCache.put(9, 28);
lRUCache.get(1);
lRUCache.put(2, 2);
lRUCache.put(7, 4);
lRUCache.put(4, 22);
lRUCache.put(7, 24);
lRUCache.put(9, 26);
lRUCache.put(13, 28);
lRUCache.put(11, 26);
/* lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
