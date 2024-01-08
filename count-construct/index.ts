const target = "abcdef";
const wordBank = ["ab", "abc", "cd", "def", "abcd"];

/*

m = target.length
n = wordBank.length

O(n ^ m * m) time
O(m * m) space

*/

const countConstruct = (target: string, wordBank: string[]) => {
  if (!target.length) return 1;

  let ways = 0;

  for (const word of wordBank) {
    if (!target.startsWith(word)) continue;

    const res = countConstruct(target.slice(word.length), wordBank);
    ways += res;
  }

  return ways;
};

console.log(countConstruct(target, wordBank));
