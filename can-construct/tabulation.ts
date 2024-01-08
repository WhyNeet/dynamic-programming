const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const wordBank = ["abc", "def", "cdef", "e", "eee"];

/*

m = target.length
n = wordBank.length

O(m * n * m) time
O(m)

*/

const canConstruct = (target: string, wordBank: string[]): boolean => {
  const table: boolean[] = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (!table[i]) continue;

    const suffix = target.slice(i, i + wordBank.length);

    for (const word of wordBank) {
      if (!suffix.startsWith(word)) continue;
      table[i + word.length] = true;
    }
  }

  return table[target.length];
};

console.log(canConstruct(target, wordBank));
