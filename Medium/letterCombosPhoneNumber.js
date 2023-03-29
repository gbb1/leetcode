var letterCombinations = function(digits) {
  const letters = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w','x','y','z'],
  }


  const N = digits.length;
  const combos = [];

  if (digits.length === 0) return combos;

  function genCombos(curr = "", index = 0) {

      if (curr.length === N) {
          combos.push(curr);
          return;
      }

      letters[digits[index]].forEach((l) => {
          genCombos(curr + l, index + 1);
      })

  }

  genCombos();
  return combos;

};