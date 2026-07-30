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
  public head: LinkedNode;
  public tail: LinkedNode;

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
    this.cache.set(key, new LinkedNode(key, value));
  }

  public getSize(val?: string) {
    console.log("========================================");

    console.log("head: ", this.head);
    console.log("tail: ", this.tail);
    /*     return `size: ${this.cache.size}, cache: ${this.cache.}, tail: ${this.tail.key}`;
     */
    return this.cache;
  }
  private changeHead(key: number) {
    const newHead = this.cache.get(key);

    if (newHead) {
      if (this.tail.key === newHead.key && newHead.prev) {
        this.tail = newHead.prev
        this.tail.next = null
      }
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
      this.head.prev = null;
    }
  }

  private deleteItem(key: number) {
    const item = this.cache.get(key);
    if (item) {
      if (item.next) {
        item.next.prev = item.prev;
      } else {
        if (item.prev) {
          this.tail =  item.prev;
        } 
      }
      if (item.prev) {
        item.prev.next = item.next;
      } 
      this.cache.delete(key);
    }
  }

  get(key: number): number {
    const value = this.cache.get(key);
    if (!value) {
      return -1;
    } else {
      this.changeHead(key);
      return value.value;
    }
  }

  put(key: number, value: number): void {
    const cacheSize = this.cache.size;
    if (cacheSize > 0) {
      const exist = this.cache.get(key);
      if (typeof exist !== "undefined") {
        this.deleteItem(key)
        this.addItem(key, value);
        this.changeHead(key);
      } else {
        if (cacheSize >= this.capacity) {
          this.deleteItem(this.tail.key)
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

const command = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]


const params = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

if (typeof params[0] !== "undefined" && typeof params[0][0] !== "undefined") {
  const lRUCache = new LRUCache(params[0][0]);

  const result = command.map((item, index) => {
    let val = null;
    if (index !== 0) {
      if (params[index] && typeof params[index][0] !== "undefined") {
        if (item === "put" && typeof params[index][1] !== "undefined") {
          lRUCache.put(params[index][0], params[index][1]);
        }
        if (item === "get") {
          val = lRUCache.get(params[index][0]);
        }
      }
    }
    console.log(lRUCache.getSize());
    return val;
  });

  console.dir(JSON.stringify(result), { maxArrayLength: null, depth: null });
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
