// mid = Math.floor((low + high) / 2)
// O(log n)

function binarySearch(arr: number[], value: number) {
 let left = 0;
 let right = arr.length - 1;
 
 while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (value === arr[mid]) return mid;
  
  if (value < arr[mid]) {
   right = mid - 1;
  } else {
   left = mid + 1;
  }
 }

 return -1;
}

console.log(binarySearch([-5, 0, 3, 5, 9, 12], 0)); // Вывод: 1
console.log(binarySearch([-5, 0, 3, 5, 9, 12], -5)); // Вывод: 0
console.log(binarySearch([-5, 0, 3, 5, 9, 12], 9)); // Вывод: 4
console.log(binarySearch([-5, 0, 3, 5, 9, 12], 2)); // Вывод: -1
console.log(binarySearch([-5, 0, 3, 5, 9, 12], 12)); // Вывод: 5

