function searchInsert(nums: number[], target: number): number {
  let len = nums.length;
  let start = Math.floor(len / 2);
  let k = 1;

  while (len >= 1) {
    if (target === nums[start]) {
      return start;
    } else {
      if (target === nums[start + 1]) {
        return start + 1;
      } else if (target === nums[start - 1]) {
        return start - 1;
      }
    }

    if (target > nums[start] && target < nums[start + 1] ) {
      return start + 1;
    }
    if (target > nums[start - 1] && target < nums[start] ) {
      return start;
    }
    len = Math.floor(len / 2);
    if (target > nums[start]) {
      start = nums.length - len;
    } else {
      start = len;
    }
    
    k++;
  }

  return start;
}

module.exports = searchInsert;
