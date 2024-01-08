const target = 7;
const nums = [3, 2, 5];

/*

O(m * n * m) time
O(m * m)

*/

const howSum = (target: number, nums: number[]): number[] | null => {
  const table: (number[] | null)[] = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < target; i++) {
    if (!table[i]) continue;

    for (const num of nums) {
      table[i + num] = [...(table[i] ?? []), num];
    }
  }

  return table[target];
};

console.log(howSum(target, nums));
