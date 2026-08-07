function searchInsert(nums: number[], target: number): number {
  let end = nums.length - 1;
  let start = 0;
  let mid = 0;

  while (start <= end) {
    if (target > nums[end]) return end + 1;
    if (target < nums[0]) return 0;

    mid = start + Math.floor((end - start) / 2);
    const midVal = nums[mid];

    if (target > midVal) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
   
  }
  return mid;
}

module.exports = searchInsert;
