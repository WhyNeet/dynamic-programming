const rows = 10,
  cols = 3;

type Grid = null[][];

const grid: Grid = Array(rows).fill(Array(cols).fill(null));

/*

O(2 ^ (m + n)) time
O(m + n) space

*/

const countWays = (row = 0, col = 0) => {
  if (row >= rows || col >= cols) return 0;
  if (row === rows - 1 && col === cols - 1) return 1;

  const res = countWays(row + 1, col) + countWays(row, col + 1);

  return res;
};

console.log(countWays());
