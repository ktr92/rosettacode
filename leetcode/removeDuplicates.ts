function removeDuplicates(nums: number[]): number {
  let i = 0;
  let index = 0;
  let len = nums.length;
  while (i < len) {
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
