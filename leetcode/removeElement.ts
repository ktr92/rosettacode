function removeElement(nums: number[], val: number): number {
  let len = nums.length;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    } else {
      len--;
    }
  }

  nums.length = len;
  return len;
}

module.exports = removeElement;
