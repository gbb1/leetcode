const prereqsPossible = (numCourses, prereqs) => {
  // todo
  let classes = {};
  for (let pair of prereqs) {
    classes[pair[0]] = classes[pair[0]] || [];
    classes[pair[0]].push(pair[1]);
  }

  const dfs = (node, visited) => {

    if (visited.has(node)) {
      return true;
    }

    let bool = false;

    if (!(node in classes)) {
      return false;
    }

    for (let next of classes[node]) {
      visited.add(node);
      bool = dfs(next, visited);
      visited.delete(node);
    }

    return bool;

  }

  for (let course in classes) {
    if (dfs(course, new Set())) {
      return false;
    }
  }

  return true;

};
