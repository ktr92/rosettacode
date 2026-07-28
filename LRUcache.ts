interface cacheCell {
    key: number,
    val: number,
    use: number
}
class LRUCache {
    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error('LRU cache must be positive number')
        }
        if (capacity > 3000) {
            throw new Error('LRU cache maximum size is 3000')
        }
        this.cache = Array(capacity);
    }

    private cache: cacheCell[];
    private use

    get(key: number): number {
        const value = this.cache.filter(item => item.key === key);
        if (!value || !value.length) return -1;
        this.cache.map(item => item.use += 1)
        value.use = 0;
        this.cache.sort((a, b) => a.use > b.use);
        return value.val;
    }

    put(key: number, value: number): void {
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */