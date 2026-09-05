function isUnique(str: string): boolean {

  // without additional data structures but TC O(n^2)
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  // with additional data structures TC O(n)
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      return false;
    }
    map.set(str[i], i);
  }
  return true;

  
}

// JS-specific solution with additional data structures TC O(n)
const isUnique_js = (str: string) =>  new Set(str).size === str.length;

console.log(isUnique("abc"));
console.log(isUnique("abcb"));
console.log(isUnique("aa"));

console.log(isUnique_js("abc"));
console.log(isUnique_js("abcb"));
console.log(isUnique_js("aa"));
