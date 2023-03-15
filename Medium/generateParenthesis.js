

var generateParenthesis = function(n) {

  const out = [];

  /*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
  */

  function generateCombos(curr = '', open = 0, close = 0) {

      if (curr.length === 0) {
          generateCombos(curr + '(', 1, 0);
      } else if (open < n && (close < n && close <= open)) {
          generateCombos(curr + '(', open + 1, close);
          generateCombos(curr + ')', open, close + 1);
      } else if (open === n && close === n) {
          out.push(curr);
      } else if (open === n) {
          generateCombos(curr + ')', open, close + 1);
      } else {
          return;
      }

  }

  generateCombos();

  let memo = {};
  for (let i = 0; i < out.length; i++) {
      memo[out[i]] = memo[out[i]] || 1;
  }

  return Object.keys(memo).filter((x) => { return x.length === (2 * n) });
};