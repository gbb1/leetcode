const canConcat = (s, words, curr = 0, word = '', wordSet = new Set(words), memo = {}) => {
  // todo

  let pos = curr + ',' + word;

  if (pos in memo) {
    return memo[pos];
  }

  if (curr === s.length) {
    return true;
  }

  let subStr = '';
  let bool = false;
  for (let i = curr; i < s.length; i++) {
    subStr += s[i];
    if (wordSet.has(subStr)) {
      bool = bool || canConcat(s, words, i + 1, subStr, wordSet, memo);
    }
  }

  memo[pos] = bool;
  return memo[pos];

};