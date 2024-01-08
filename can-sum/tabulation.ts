const target = 300;
const nums = [7, 14];

/*

m = target
n = nums.length

O(m * n) time
O(m) space

*/

const canSum = (target: number, nums: number[]): boolean => {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target; i++) {
    if (!table[i]) continue;

    for (const num of nums) table[i + num] = true;
  }

  return table[target];
};

console.log(canSum(target, nums));
