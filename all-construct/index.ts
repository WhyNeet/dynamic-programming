const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const wordBank = ["e", "ee"];

/*

O(n ^ m * m) time
O(m) space - result is not included

*/

const allConstruct = (target: string, wordBank: string[]): string[][] => {
  if (!target.length) return [[]];

  const ways: string[][] = [];

  for (const word of wordBank) {
    if (!target.startsWith(word)) continue;

    const res = allConstruct(target.slice(word.length), wordBank);

    const targetWays = res.map((way) => [word, ...way]);
    ways.push(...targetWays);
  }

  return ways;
};

console.log(allConstruct(target, wordBank));
