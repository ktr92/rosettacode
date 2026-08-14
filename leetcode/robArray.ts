function rob(nums: number[]): number {
  

  let skip = nums[0] > nums[1] ? 1 : 0;
  let last = nums[0] > nums[1] ? 0 : 1;

  let skipValue = nums[skip];
  let prev = 0
  let summ = nums[last];

  for (let i = 2; i < nums.length; i++) {
    console.log('skip: ', skip, ' last: ', last, ' summ: ', summ)

    skipValue = typeof skip === 'number' ? nums[skip] : 0;
   
    if (nums[i] + skipValue > nums[last] + prev) {
      summ += nums[i] - nums[last] + skipValue - prev;
      skip = last;
      last = i;
    } else {
      skip = i;
      skipValue = nums[i]
    }
    prev = nums[last - 2]

  }

  return summ;
}

module.exports = rob;
