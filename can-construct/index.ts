const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const wordBank = ["e", "eeeee", "ee", "eee", "eeee", "eeeeee"];

/*

m = target.length
n = wordBank.length

O(n ^ m * m) time
O(m * m) space

*/

const canConstruct = (target: string, wordBank: string[]) => {
  if (!target.length) return true;

  return wordBank.some((word) => {
    if (target.length < word.length || !target.startsWith(word)) return false;

    const res = canConstruct(target.slice(word.length), wordBank);

    return target.length === word.length ? target === word : res;
  });
};

console.log(canConstruct(target, wordBank));
