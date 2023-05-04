const semestersRequired = (numCourses, prereqs) => {
  // todo
  let aList = {};
  prereqs.forEach((p) => {
    const [pre, next] = p;
    if (!(pre in aList)) {
      aList[pre] = [];
    }
    aList[pre] = aList[pre].concat(next);
  })
  console.log(aList);

  let distances = {};
  for (let key in aList) {
    const next = aList[key];
    if (!(next in aList)) {
      distances[next] = 1;
    }
  }

  if (Object.keys(distances).length === 0) {
    return 1;
  }

  for (let node in aList) {
    traverse(node);
  }

  function traverse(curr) {
    if (curr in distances) {
      return distances[curr];
    }

    let max = 0;
    if (curr in aList) {
      for (let n of aList[curr]) {
      // console.log(n);
        let count = traverse(n);
        max = Math.max(count, max);
      }
    }

    distances[curr] = 1 + max;
    return distances[curr];
  }

  console.log(distances)
  return Math.max(...Object.values(distances))

};
