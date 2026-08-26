function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let value = arr[0] as number;
  const less: number[] = [];
  const greater: number[] = [];
  const equal: number[] = [];
  for (let i = 0; i < arr.length; i++) {
   const x = arr[i] as number;
   if (x === value) {
     equal.push(x)
   } else if (x < value) {
      less.push(x);
    } else if (x > value) {
      greater.push(x);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

console.log(quickSort([-3, 10, -15, -3, 0, 5, -1])); // [-15, -3, -1, 0, 5, 10]
console.log(quickSort([4.2, 1.5, 3.3, 0.8, 2.1])); // [0.8, 1.5, 2.1, 3.3, 4.2]
