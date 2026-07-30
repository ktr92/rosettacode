function twoSum(nums: number[], target: number): number[] { 

  let result: number[] = [];
  const resultMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "undefined") {
      const sought = resultMap.get(nums[i]);
      if (sought && sought.value === nums[i]) {
        result = [Math.min(i, sought.index), Math.max(i, sought.index)];
        break;
      }

      const value = target - nums[i];
      resultMap.set(value, {
       value,
       index: i,
       num: nums[i]
      });

    }
  }
  return result;
}

const nums = [-1,-2,-3,-4,-5]

const target = -8;

console.log(twoSum(nums, target));
