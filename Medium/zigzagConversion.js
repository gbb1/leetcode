/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/

// "PAYPALISHIRING"

// "PAHNAPLSIIGYIR"

var convert = function(s, numRows) {

  const rows = {};
  let row = 1;
  let dir = true;

  for (let i = 0; i < s.length; i++) {
    if (rows[row] === undefined) {
      rows[row] = [s[i]];
    } else {
      rows[row].push(s[i]);
    }

    if (dir) {
      row++;
      if (row === numRows) {
        dir = false;
      }
    } else {
      row--;
      if (row === 1) {
        dir = true;
      }
    }
  }

  let transform = '';
  const out = Object.keys(rows).forEach((key) => {
    transform += rows[key].join('');
  })

  return transform;

};