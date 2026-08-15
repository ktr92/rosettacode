function rob(nums: number[]): number {
  if (nums.length < 2) return nums[0];

  let skip = nums[0] > nums[1] ? 1 : 0;
  let last = nums[0] > nums[1] ? 0 : 1;

  let skipValue = nums[skip];
  let prev = 0;
  let summ = nums[last];

  function changeLast(i) {
    skip = last;
    last = i;
    skipValue = nums[i];
    prev = nums[last - 2];
  }

  if (nums.length > 2) {
    for (let i = 2; i < nums.length; i++) {
      skipValue = typeof skip === "number" ? nums[skip] : 0;

      if (skip > last) {
        summ += nums[i];
        changeLast(i);
        continue;
      }

      if (nums[i] + skipValue > nums[last] + prev) {
        summ += nums[i] - nums[last] + skipValue - prev;
        changeLast(i);
      } else {
        skip = i;
        skipValue = nums[i];
      }
    }
  }

  return summ;
}
module.exports = rob;
