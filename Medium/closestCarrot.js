const closestCarrot = (grid, startRow, startCol) => {
  // tod
  const moves = [[1,0],[-1,0],[0,1],[0,-1]]
  const R = grid.length;
  const C = grid[0].length;

  const pos = [startRow, startCol, 0];
  const visited = new Set([ startRow + ',' + startCol ]);

  let queue = [pos]

  let count = 0;
  while (queue.length) {
    let curr = queue.shift();

    if (grid[curr[0]][curr[1]] === 'C') {
      return curr[2];
    }

    for (let move of moves) {
      let newR = curr[0] + move[0];
      let newC = curr[1] + move[1];

      let next = newR + ',' + newC;

      if (newR < R && newR >= 0 && newC < C && newC >= 0 && grid[newR][newC] !== 'X' && !visited.has(next)) {
        queue.push([newR, newC, curr[2] + 1]);
        visited.add(next);
      }

    }

  }
  return -1;
};