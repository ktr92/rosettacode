function rob(nums: number[]): number {
  function indexOfMax(arr) {
    if (arr.length === 0) {
      return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  }

  const hashMap = new Map();
  let summ = 0;

  function addIndex(i: number) {
    hashMap.set(i, i);
    nums.splice(i, 1, -Infinity);
  }

  for (let i = 0; i < nums.length; i++) {
    let maxIndex = indexOfMax(nums);
    if (!hashMap.has(maxIndex)) {
     if (nums[maxIndex + 1] && nums[maxIndex - 1]) {
      if (nums[maxIndex + 1] + nums[maxIndex - 1] > nums[maxIndex]) {
       addIndex(maxIndex);
       continue
      }
     }
      summ += nums[maxIndex];

      addIndex(maxIndex);

      if (nums[maxIndex + 1]) {
        addIndex(maxIndex + 1);
      }
      if (nums[maxIndex - 1]) {
        addIndex(maxIndex - 1);
      }
    } else {
      nums.splice(maxIndex, 1, -Infinity);
    }
  }

  return summ;
}

module.exports = rob;
