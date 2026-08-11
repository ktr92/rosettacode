function lengthOfLongestSubstring(s: string): number {
  const hashMap = new Map<string, number>();
  let left = 0;
  let size = 0;
  for (let right = 0; right < s.length; right++) {
    const item = s[right];
    const index = hashMap.get(item);
    if (index >= left) {
      left = index + 1;
    }
    hashMap.set(item, right);
     const newSize = right - left + 1;
    size = newSize > size ? newSize : size;
  }
  return size;
}

module.exports = lengthOfLongestSubstring;
