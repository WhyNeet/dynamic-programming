const n = 50;

/*

O(2 ^ n) time
O(n) space

*/

const fib = (n: number): number => {
  if (n <= 2) return 1;

  const res = fib(n - 1) + fib(n - 2);
  return res;
};

console.log(fib(n));
