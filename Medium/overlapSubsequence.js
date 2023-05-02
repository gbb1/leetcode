const overlapSubsequence = (str1, str2, curr1 = 0, curr2 = 0, memo = {}) => {
  // todo
  const pos = curr1 + ',' + curr2;

  if (pos in memo) {
    return memo[pos];
  }

  if (curr1 === str1.length || curr2 === str2.length) {
    return 0;
  }

  if (str1[curr1] === str2[curr2]) {
    let delBoth = 1 + overlapSubsequence(str1, str2, curr1 + 1, curr2 + 1, memo);
    memo[pos] = delBoth;
  } else {
    let skip1 = overlapSubsequence(str1, str2, curr1 + 1, curr2, memo);
    let skip2 = overlapSubsequence(str1, str2, curr1, curr2 + 1, memo);
    memo[pos] = Math.max(skip1, skip2);
  }

  return memo[pos];

};