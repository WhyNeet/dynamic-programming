const n = 50;

/*

O(n) time
O(n) space

*/

const fib = (n: number) => {
  const table: number[] = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fib(n));
