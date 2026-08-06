function removeDuplicates(nums: number[]): number {
  let i = 0;
  let index = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i];
      index++;
    }
    i++;
  }
  nums.length = index
  return index;
}

module.exports = removeDuplicates;
