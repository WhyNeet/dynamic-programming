const target = 300;
const nums = [7, 14];

/*

O(n * m) time
O(m) space
each distinct number in tree representation is visited only once, there are m * n distinct numbers

*/

const canSum = (arr: number[], target: number, memo = {}) => {
  if (target < 0) return false;
  if (target in memo) return memo[target];

  return arr.some((num) => {
    const res = num && canSum(arr, target - num, memo);

    memo[target] = res;

    return target === num || res;
  });
};

console.log(canSum(nums, target));
