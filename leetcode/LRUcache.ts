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
class LRUCache {
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("LRU cache must be positive number");
    }
    if (capacity > 3000) {
      throw new Error("LRU cache maximum size is 3000");
    }
    this.capacity = capacity;
    this.cache = [];
  }

  private capacity: number;
  private cache: number[][];

  private setFirst(index: number) {
    const [el] = this.cache.splice(index, 1);
    this.cache.splice(0, 0, el);
    //this.cache.map((item) => (item.use += 1));
    //value.use = 0;
    //this.cache.sort((a, b) => (a.use > b.use ? 1 : -1));
  }

  private logger(value?: number) {
    //console.log("\n CACHE STATE:\n", this.cache, value ? value : "");
  }

  get(key: number): number {
    const index = Object.keys(this.cache).findIndex((k) =>
      k ? Number(k) === key : false,
    );
    if (!index || !this.cache[index]) {
      this.logger(-1);
      return -1;
    } else {
      const value = this.cache[index];
      this.setFirst(index);
      //this.cacheSort(value);
      this.logger(value[1]);
      return value[1] ? value[1] : -1;
    }
  }

  put(key: number, value: number): void {
    const cacheSize = Object.keys(this.cache).length;
    if (cacheSize) {
      const index = Object.keys(this.cache).findIndex((k) =>
        k ? Number(k) === key : false,
      );
      if (!index || !this.cache[index]) {
        if (cacheSize >= this.capacity) {
          this.cache.pop();
        }
        this.cache.unshift([key, value])
      } else {
         this.cache[index][1] = value;
         this.setFirst(index);
      }
    } else {
      this.cache.unshift([key, value])
    }

    this.logger();
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
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
