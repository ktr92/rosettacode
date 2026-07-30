function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2 || nums.length > Math.pow(10, 4))
    throw new Error("2 <= nums.length <= 10^4");
  if (target < Math.pow(-10, 9) || target > Math.pow(10, 9))
    throw new Error("-10^9 <= target <= 10^9");

  let result: number[] = [];
  if (nums.length > 2 && nums.length % 2 !== 0) nums.push(0);

  const LEN = nums.length > 2 ? nums.length / 2 : nums.length;
  for (let i = 0; i < LEN; i++) {
     if (nums[i] && nums[i + LEN - 1]) {
      if (nums[i] + nums[i + LEN - 1] === target) {
        result = [i, i + LEN - 1]
      }
    }
  } 
  return result
}

const nums = [3,2,3];
const target = 6;

console.log(twoSum(nums, target))
