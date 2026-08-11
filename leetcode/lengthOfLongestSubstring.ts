function lengthOfLongestSubstring(s: string): number {
  let unique = [];

  const arr = s.split("");

  let tmp = [];
  for (let j = 0; j < arr.length; j++) {
    if (tmp.indexOf(arr[j]) === -1) {
      tmp.push(arr[j]);
    } else {
     
      if (tmp.length > unique.length) {
        unique = [...tmp];
      }
      tmp.length = 0 
      tmp.push(arr[j]);
      let k = j - 1;       
      while (arr[k] !== arr[j]) {
       tmp.unshift(arr[k]);
       k--
      }
    }
  }


  if (tmp.length > unique.length) {
    return tmp.length;
  } else {
    return unique.length;
  }
}

module.exports = lengthOfLongestSubstring;
