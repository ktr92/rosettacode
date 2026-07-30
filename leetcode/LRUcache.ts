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
    //console.log("head: ", this.head);
    console.log(
      val,
      " head: ",
      [this.head.key, this.head.next ? this.head.next.key : "NOOO"],
      " tail: ",
      [this.tail.key, this.tail.prev ? this.tail.prev.key : "FAIL"],
    );
    /*     return `size: ${this.cache.size}, cache: ${this.cache.}, tail: ${this.tail.key}`;
     */
    // return this.cache;
  }

  private changeHead(key: number) {
    const newHead = this.cache.get(key);
    const oldHead = this.head;
    if (newHead && newHead.key !== oldHead.key) {
      if (this.tail.key === newHead.key && newHead.prev) {
        this.tail = newHead.prev;
        this.tail.next = null;
      } 
        oldHead.prev = newHead;
        newHead.next = oldHead;

        this.head = newHead;
        this.head.prev = null;
    
    }
  }

  private deleteItem(key: number) {
    const item = this.cache.get(key);
    if (item) {
      // change tail
      if (this.tail.key === key && item.prev) {
        this.tail = item.prev;
        this.tail.next = null;
      } else if (this.head.key === key && item.next) {
        this.head = item.next;
        this.head.prev = null;
      } else {
        // change next item's prev option
        if (item.next) {
          item.next.prev = item.prev;
        }
        // change prev item's next option
        if (item.prev) {
          item.prev.next = item.next;
        }
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
    const exist = this.cache.has(key);
    if (exist) {
      this.deleteItem(key);
    }
    this.addItem(key, value);
    this.changeHead(key);
    if (this.cache.size > this.capacity) {
      this.deleteItem(this.tail.key);
    }

    if (this.cache.size === 1) {
      const singleNode = this.cache.get(key);
      if (singleNode) {
        this.tail = singleNode;
        //this.head = singleNode;
      }
    }
    //console.log(this.getSize());
  }
}

const command = [
  "LRUCache",
  "put",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "get",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "get",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
  "put",
  "get",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "get",
  "get",
  "get",
  "put",
  "put",
  "put",
  "put",
  "get",
  "put",
  "put",
  "put",
  "put",
  "put",
  "put",
  "put",
];

const params = [
  [10],
  [10, 13],
  [3, 17],
  [6, 11],
  [10, 5],
  [9, 10],
  [13],
  [2, 19],
  [2],
  [3],
  [5, 25],
  [8],
  [9, 22],
  [5, 5],
  [1, 30],
  [11],
  [9, 12],
  [7],
  [5],
  [8],
  [9],
  [4, 30],
  [9, 3],
  [9],
  [10],
  [10],
  [6, 14],
  [3, 1],
  [3],
  [10, 11],
  [8],
  [2, 14],
  [1],
  [5],
  [4],
  [11, 4],
  [12, 24],
  [5, 18],
  [13],
  [7, 23],
  [8],
  [12],
  [3, 27],
  [2, 12],
  [5],
  [2, 9],
  [13, 4],
  [8, 18],
  [1, 7],
  [6],
  [9, 29],
  [8, 21],
  [5],
  [6, 30],
  [1, 12],
  [10],
  [4, 15],
  [7, 22],
  [11, 26],
  [8, 17],
  [9, 29],
  [5],
  [3, 4],
  [11, 30],
  [12],
  [4, 29],
  [3],
  [9],
  [6],
  [3, 4],
  [1],
  [10],
  [3, 29],
  [10, 28],
  [1, 20],
  [11, 13],
  [3],
  [3, 12],
  [3, 8],
  [10, 9],
  [3, 26],
  [8],
  [7],
  [5],
  [13, 17],
  [2, 27],
  [11, 15],
  [12],
  [9, 19],
  [2, 15],
  [3, 16],
  [1],
  [12, 17],
  [9, 1],
  [6, 19],
  [4],
  [5],
  [5],
  [8, 1],
  [11, 7],
  [5, 2],
  [9, 28],
  [1],
  [2, 2],
  [7, 4],
  [4, 22],
  [7, 24],
  [9, 26],
  [13, 28],
  [11, 26],
];

if (typeof params[0] !== "undefined" && typeof params[0][0] !== "undefined") {
  const lRUCache = new LRUCache(params[0][0]);

  const result = command.map((item, index) => {
    console.log("========================================");

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

    lRUCache.getSize(
      index +
        " " +
        item +
        " " +
        "[" +
        params[index][0] +
        ", " +
        (params[index][1] || "") +
        "]",
    );

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
