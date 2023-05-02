const quickestConcat = (s, words, curr = 0, currWord = '', wordSet = new Set(words), memo = {}) => {
  // todo
  const pos = curr + ',' + currWord;

  if (pos in memo) {
    return memo[pos];
  }

  if (curr === s.length) {
    return 0;
  }

  let currString = '';
  let min = -1;
  for (let i = curr; i < s.length; i++) {
    currString += s[i];
    if (wordSet.has(currString)) {
      let count = 1 + quickestConcat(s, words, i+1, currString, wordSet, memo)
      if ((min < 0 && count > 0) || (count > 0 && count < min)) {
        min = count;
      }
    }
  }

  memo[pos] = min;
  return memo[pos];

};