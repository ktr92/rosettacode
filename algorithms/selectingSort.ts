function selectingSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
        let min = arr[i];
        if (arr[k] < min) {
          [arr[k], arr[i]] = [arr[i], arr[k]];
        }
    }
  }

  return arr;
}

console.log(selectingSort([-3, 10, -15, -3, 0, 5, -1])); // [-15, -3, -1, 0, 5, 10]
console.log(selectingSort([4.2, 1.5, 3.3, 0.8, 2.1])); // [0.8, 1.5, 2.1, 3.3, 4.2]
console.log(selectingSort([1, NaN, 0])); // [0.8, 1.5, 2.1, 3.3, 4.2]
