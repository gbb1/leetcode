
function Graph() {
  this.nodes = new Map();
  this.size = 0;
}

Graph.prototype.add(val) {
  this.nodes.set(val, []);
  this.size++;
}

Graph.prototype.link(val1, val2) {
  this.nodes.get(val1).push(val2);
  this.nodes.get(val2).push(val1);
}


Graph.prototype.unlink(val1, val2) {
  let nodes1 = this.nodes.get(val1);
  let nodes2 = this.nodes.get(val2);

  for (let i = 0; i < nodes1.length; i++) {
    if (nodes1[i] === val2) {
      nodes1.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < nodes2.length; i++) {
    if (nodes2[i] === val1) {
      nodes2.splice(i, 1);
      break;
    }
  }
}

Graph.prototype.shortestPath(val1, val2) {

  function findPath(val, path = []) {
    let nodes = this.nodes.get(val);

    let min = this.size;
    let out = [];

    nodes.forEach((v) => {
      if (v === val2) {
        return (path.concat(val2));
      } else if (v !== val1) {
        let path = findPath(v, path.concat(v));

        if (path.length < min) {
          out = path;
        }
      }
    })
    return out;
  }

  findPath(val1, []);


}