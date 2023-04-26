const undirectedPath = (edges, nodeA, nodeB) => {

  let list = {};
  edges.forEach((edge) => {
    list[edge[0]] = list[edge[0]]?.concat(edge[1]) || [edge[1]];
    list[edge[1]] = list[edge[1]]?.concat(edge[0]) || [edge[0]];
  })

  let visited = {};


  console.log(list);

  let stack = [nodeA];

  while (stack.length) {
    let curr = stack.pop();
    visited[curr] = true;

    if (curr === nodeB) {
      return true;
    }

    for (let node of list[curr]) {
      if (!(node in visited)) {
        stack.push(node)
      }
    }
  }
  return false;

};

module.exports = {
  undirectedPath,
};