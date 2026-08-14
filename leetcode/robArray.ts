function rob(nums: number[]): number {
  

  let skip = null;
  let last = 0;
  let summ = nums[0];

  const step = (a, b, c) => {
    if (b > a + c) {
      return b;
    } else {
      return c;
    }
  };

  let skipValue = 0;

  let prev = 0

  for (let i = 1; i < nums.length; i++) {
    skipValue = typeof skip === 'number' ? nums[skip] : 0;

    if (nums[i] + skipValue > nums[last] + prev) {
      prev = skipValue
      summ += nums[i] + skipValue - nums[last];
      skip = last;
      last = i;
    } else {
      skip = i;
      skipValue = nums[i]
    }

    console.log('skip: ', skip, ' last: ', last, ' summ: ', summ)
  }

  return summ;
}

module.exports = rob;
