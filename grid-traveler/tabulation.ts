const rows = 3,
  cols = 10;

/*

O(mn) time
O(mn) space

*/

const gridTraveler = (rows: number, cols: number) => {
  const table = Array(rows + 1)
    .fill(null)
    .map(() => Array(cols + 1).fill(0));

  table[1][1] = 1;

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const current = table[row][col];
      if (row + 1 <= rows) table[row + 1][col] += current;
      if (col + 1 <= cols) table[row][col + 1] += current;
    }
  }

  return table[rows][cols];
};

console.log(gridTraveler(rows, cols));
