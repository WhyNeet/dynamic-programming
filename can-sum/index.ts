const target = 300;
const nums = [7, 14];

/*

O(n ^ m) time
O(m) space

m = target sum
n = nums length

explanation: in the worst case, target is reduced by one each call

*/

const canSum = (arr: number[], target: number) => {
  if (target < 0) return false;

  return arr.some((num) => {
    const res = num && canSum(arr, target - num);

    return target === num || res;
  });
};

console.log(canSum(nums, target));
