function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const slWin = new Set();
  if (k < 1) return false
  for (let i = 0; i < nums.length; i++) {
    if (slWin.has(nums[i])) {
      return true;
    } else {
      slWin.delete(nums[i - k]);
      slWin.add(nums[i]);
    }
  }

  return false;
}

module.exports = containsNearbyDuplicate;
