const target = 7;
const nums = [3, 2, 5];

/*

m = target
n = nums.length

O(n ^ m * m) time
O(m)

*/

const howSum = (nums: number[], target: number): number[] | null => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (const num of nums) {
    const remainder = target - num;
    const res = howSum(nums, remainder);
    if (res) {
      return [...res, num];
    }
  }

  return null;
};

console.log(howSum(nums, target));
