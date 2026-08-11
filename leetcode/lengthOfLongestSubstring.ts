function lengthOfLongestSubstring(s: string): number {
  let unique: string[] = [];

  const arr: string[] = s.split("");
  const hashMap = new Map();
  let tmp: string[] = [];
  for (let j = 0; j < arr.length; j++) {
    if (!hashMap.has(arr[j])) {
      tmp.push(arr[j] as string);
      hashMap.set(arr[j], j)
    } else {
      if (tmp.length > unique.length) {
        unique = [...tmp];
      }
      const start = hashMap.get(arr[j])
      hashMap.clear()
        tmp.length = 0 
        j = start 
    
      
    }
  }

  if (tmp.length > unique.length) {
    return tmp.length;
  } else {
    return unique.length;
  }
}

module.exports = lengthOfLongestSubstring;
