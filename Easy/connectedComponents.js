const connectedComponentsCount = (graph) => {
  // todo
  let stack = [];
  stack.push(Object.keys(graph)[0])
  let nodes = new Set();

  // console.log(stack);

  for (let key of Object.keys(graph)) {
    nodes.add(key);
  }

  let count = 0;

  while (nodes.size) {

    while (stack.length) {

      console.log(nodes.size)

      let curr = stack.pop();
      nodes.delete(curr.toString());

      for (let next of graph[curr]) {
        if (nodes.has(next.toString())) {
          stack.push(next);
        }
      }

    }
    count++;
    if (nodes.size) {
       stack.push([...nodes.entries()][0][0])
    }
  }
  return count;


};

module.exports = {
  connectedComponentsCount,
};
