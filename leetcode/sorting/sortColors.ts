/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  //Dutch national flag problem
  let left = 0;
  let current = 0;
  let right = nums.length - 1;

  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  while (current <= right) {
    const val = nums[current];
    if (val === 0) {
      swap(current, left);
      current++;
      left++;
    } else if (val === 1) {
      current++;
    } else {
      swap(current, right);
      right--;
    }
  }
}

module.exports = sortColors;
