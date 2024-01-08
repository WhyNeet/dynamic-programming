const target = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

/*

O(m * n * m) time
O(m) space

*/

const countConstruct = (target: string, wordBank: string[]): number => {
  const table: number[] = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < table.length; i++) {
    if (!table[i]) continue;

    const suffix = target.slice(i);

    for (const word of wordBank) {
      if (!suffix.startsWith(word)) continue;

      table[i + word.length] += table[i];
    }
  }

  return table[target.length];
};

console.log(countConstruct(target, wordBank));
