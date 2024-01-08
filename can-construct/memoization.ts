const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const wordBank = ["e", "eeeee", "ee", "eee", "eeee", "eeeeee"];

/*

m = target.length
n = wordBank.length

O(m * n * m) time
O(m * m) space

*/

const canConstruct = (target: string, wordBank: string[], memo = {}) => {
  if (!target.length) return true;
  if (target in memo) return memo[target];

  return wordBank.some((word) => {
    if (target.length < word.length || !target.startsWith(word)) return false;

    const res = canConstruct(target.slice(word.length), wordBank, memo);
    memo[target] = res;

    return target.length === word.length ? target === word : res;
  });
};

console.log(canConstruct(target, wordBank));
