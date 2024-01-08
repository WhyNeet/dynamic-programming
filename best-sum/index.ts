const nums = [5, 3, 4, 7];
const target = 7;

/*

O(n ^ m * m) time
O(m * m) space

*/

const bestSum = (nums: number[], target: number) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let result: number[] | null = null;

  for (const num of nums) {
    const remainder = target - num;
    const res = bestSum(nums, remainder);
    if (res && (!result || (result as number[]).length > res.length + 1)) {
      result = [...res, num];
    }
  }

  return result;
};

console.log(bestSum(nums, target));
