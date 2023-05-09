const knightAttack = (n, kr, kc, pr, pc) => {
  // todo
  const moves = [[1,2],[-1,2],[1,-2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];

  let queue = [[kr,kc,0]];
  let visited = new Set([kr,kc,0]);

  while (queue.length) {

    const [r, c, count] = queue.shift();
    const pos = r + ',' + c;

    for (let move of moves) {
      const newR = move[0] + r;
      const newC = move[1] + c;

      const newPos = newR + ',' + newC;

      if (newR === pr && newC === pc) {
        return count + 1;
      }

      if (checkBounds(newR, newC, n) && !visited.has(newPos)) {
        visited.add(newPos);
        queue.push([newR, newC, count + 1]);
      }
    }

  }
  return null;

};

const checkBounds = (r, c, N) => {
  return (r >= 0 && r < N && c >= 0 && c < N);
}

module.exports = {
  knightAttack,
};
