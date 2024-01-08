const nums = [5, 3, 4, 7];
const target = 7;

/*

O(m * n * m) time
O(m * m) space

*/

const bestSum = (nums: number[], target: number, memo = {}) => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  let result: number[] | null = null;

  for (const num of nums) {
    const remainder = target - num;
    const res = bestSum(nums, remainder, memo);
    if (res && (!result || (result as number[]).length > res.length + 1)) {
      result = [...res, num];
    }
    memo[remainder] = res;
  }

  return result;
};

console.log(bestSum(nums, target));
