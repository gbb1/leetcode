/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

  const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
  const rows = grid.length;
  const cols = grid[0].length;

  let rottens = [];

  let fresh = 0;
  grid.forEach((row, index) => {
      row.forEach((i, col) => {
          if (i === 1) {
              fresh++;
          }
          if (i === 2) {
              rottens.push([index, col]);
          }
      })
  })

  let waves = 0;

  while (rottens.length > 0 && fresh > 0) {
      console.log(rottens)
      let len = rottens.length;
      for (let i = 0; i < len; i++) {
          let curr = rottens.shift();

          dirs.forEach((step) => {
              let newRow = curr[0] + step[0];
              let newCol = curr[1] + step[1];
              if (newRow < rows && newCol < cols && newRow >= 0 && newCol >= 0) {
                  if (grid[newRow][newCol] === 1) {
                      grid[newRow][newCol] = 2;
                      fresh--;
                      rottens.push([newRow, newCol])
                  }
              }
          })
      }
      waves++;

  }

  if (fresh === 0) {
      return waves;
  }
  return -1;

};