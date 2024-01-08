const target = "purple";
const wordBank = ["purpl", "purp", "le", "ur", "p"];

/*

m = target.length
n = wordBank.length

O(n ^ m) time
O(n ^ m) space

*/

const allConstruct = (target: string, wordBank: string[]): string[][] => {
  const table: string[][][] = Array(target.length + 1)
    .fill(null)
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i < target.length; i++) {
    if (!table[i].length) continue;

    const suffix = target.slice(i);

    for (const word of wordBank) {
      if (!suffix.startsWith(word)) continue;

      table[i + word.length].push(...table[i].map((way) => [...way, word]));
    }
  }

  return table[target.length];
};

console.log(allConstruct(target, wordBank));
