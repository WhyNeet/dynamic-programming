const target = 7;
const nums = [3, 2, 5];

/*

m = target
n = nums.length

O(n * m * m) time
O(m * m)

*/

const howSum = (nums: number[], target: number, memo = {}): number[] | null => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  for (const num of nums) {
    const remainder = target - num;
    const res = howSum(nums, remainder, memo);
    if (res) {
      memo[remainder] = [...res, num];
      return [...res, num];
    }
  }

  memo[target] = null;

  return null;
};

console.log(howSum(nums, target));
