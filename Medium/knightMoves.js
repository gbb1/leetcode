const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  // todo
  const pos = kr + ',' + kc + ',' + m;
  const moves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]

  if (pos in memo) {
    return memo[pos];
  }

  if (kr >= n || kr < 0 || kc >= n || kc < 0 || m < 0) {
    return 0;
  }

  if (m === 0) {
    if (kr === pr && kc === pc) {
      return 1;
    }
    return 0;
  }

  let ways = 0;
  for (let move of moves) {
    ways += knightlyNumber(n, m - 1, kr + move[0], kc + move[1], pr, pc, memo);
  }

  memo[pos] = ways;
  return memo[pos];

};