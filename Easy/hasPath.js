const hasPath = (graph, src, dst) => {
  // todo

  function DFStrav(start) {
    let stack = [start];

    while (stack.length) {
      let next = stack.pop();
      if (next === dst) {
        return true;
      }

      for (let str of graph[next]) {
        stack.push(str);
      }

    }
    return false;

  }

  return DFStrav(src)


};

module.exports = {
  hasPath,
};
