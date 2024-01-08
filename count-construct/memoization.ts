const target = "abcdef";
const wordBank = ["ab", "abc", "cd", "def", "abcd"];

/*

m = target.length
n = wordBank.length

O(m * n * m) time
O(m * m) space

*/

const countConstruct = (target: string, wordBank: string[], memo = {}) => {
  if (!target.length) return 1;
  if (target in memo) return memo[target];

  let ways = 0;

  for (const word of wordBank) {
    if (!target.startsWith(word)) continue;

    const res = countConstruct(target.slice(word.length), wordBank, memo);
    ways += res;
  }

  memo[target] = ways;

  return ways;
};

console.log(countConstruct(target, wordBank));
