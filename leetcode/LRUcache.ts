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
class Node {
  public next: Node | null = null
  public prev: Node | null = null
  constructor(public key: number, public value: number) {}
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, Node>;
  private head: Node;
  private tail: Node;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("LRU cache must be positive number");
    }
    if (capacity > 3000) {
      throw new Error("LRU cache maximum size is 3000");
    }
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
  }



  private setFirst(index: number) {
    
  }

  private isKeyExist(index: number) {
    return index >= 0;
  }
  private isValueExist(value: unknown) {
    return typeof value !== 'undefined'
  }

  private getIndex(key: number) {
    return this.cache.findIndex((k) => k[0] === key);
  }

  get(key: number): number {
    const index = this.getIndex(key);
    if (!this.isKeyExist(index)) {
      return -1;
    } else {
      const value = this.cache[index];
      this.setFirst(index);
      return this.isValueExist(value) && this.isValueExist(value[1]) ? value[1] : -1;
    }
  }

  put(key: number, value: number): void {
    const cacheSize = Object.keys(this.cache).length;
    if (cacheSize) {
      const index = this.getIndex(key);
      if (!this.isKeyExist(index)) {
        if (cacheSize >= this.capacity) {
          this.cache.pop();
        }
        this.cache.unshift([key, value]);
      } else {
        if (this.isValueExist(this.cache[index])) {
          this.cache[index][1] = value;
          this.setFirst(index);
        }
      }
    } else {
      this.cache.unshift([key, value]);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // cache is {1=1}
lRUCache.get(2); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
