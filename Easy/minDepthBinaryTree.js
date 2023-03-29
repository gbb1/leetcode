var minDepth = function(root) {


  function getDepth(node = root, depth = 1) {

      if (node.left === null && node.right === null) {
          return depth;
      }

      let left = node.left === null ? +Infinity : getDepth(node.left, depth+1);
      let right = node.right === null ? + Infinity : getDepth(node.right, depth+1);

      return Math.min(left, right);

  }

  if (root) {
      return getDepth();
  } else {
      return 0;
  }

};