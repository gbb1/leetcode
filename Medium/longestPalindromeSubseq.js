const maxPalinSubsequence = (str, start=0, end=str.length -1, memo={}) => {

  let pos = start + ',' + end;

  if (pos in memo) {
    return memo[pos];
  }

  if (start - end > 0) {
    return 0;
  }

  if (start - end === 0) {
    return 1;
  }

  if (str[start] === str[end]) {
    let skipBoth = 2 + maxPalinSubsequence(str, start+1, end-1, memo);
    memo[pos] = skipBoth;
  } else {
    let skipFirst = maxPalinSubsequence(str, start+1, end, memo);
    let skipLast = maxPalinSubsequence(str, start, end-1, memo);
    memo[pos] = Math.max(skipFirst, skipLast);
  }

  return memo[pos];


};


module.exports = {
  maxPalinSubsequence,
};
