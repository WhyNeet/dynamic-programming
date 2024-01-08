const n = 50;

/*

O(n) time
O(n) space

*/

const fib = (n: number, memo = {}): number => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];

  const res = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = res;

  return res;
};

console.log(fib(n));
