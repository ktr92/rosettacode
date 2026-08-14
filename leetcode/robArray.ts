function rob(nums: number[]): number {
  

  let skip = nums[0] > nums[1] ? 1 : 0;
  let last = nums[0] > nums[1] ? 0 : 1;

  let skipValue = nums[skip];
  let prev = 0
  let summ = nums[last];

  for (let i = 2; i < nums.length; i++) {

    skipValue = typeof skip === 'number' ? nums[skip] : 0;

    if (skip > last) {
     last = i;
     summ += nums[i];
     continue;
    }
   
    if (nums[i] + skipValue > nums[last] + prev) {
      summ += nums[i] - nums[last] + skipValue - prev;
      skip = last;
      last = i;
      skipValue = nums[i]
       prev = nums[last - 2]
    } else {
      skip = i;
      skipValue = nums[i]
    }
   
      console.log('skip: ', skip, ' last: ', last, ' summ: ', summ)

  }
  return summ;
}

module.exports = rob;
