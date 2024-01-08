const target = 14;
const nums = [2, 3, 10, 1];

/*

m = target.length
n = nums.length

O(m * n * m) time
O(m * m) space

*/

const bestSum = (target: number, nums: number[]) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < target; i++) {
    if (!table[i]) continue;

    for (const num of nums) {
      if (!table[i + num] || table[i + num].length > table[i].length + 1)
        table[i + num] = [...table[i], num];
    }
  }

  return table[target];
};

console.log(bestSum(target, nums));
