// [1,2,3,4,5,6,7]

function arrayBinarySearch(array, value) {

  function findVal(left = 0, right = array.length - 1) {

    let middle = Math.floor((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    }

    if (left === right) {
      return null;
    }

    if (array[middle] < value) {
      return findVal(middle + 1, right);
    }

    if (array[middle] > value) {
      return findVal(left, middle - 1);
    }

  }

  return findVal();

}


// console.log(arrayBinarySearch([1,2,3,4,5], 6));


function treeBinarySearch(root, value) {

  if (root === null) {
    return false;
  }

  if (root.val === value) {
    return true;
  }

  if (root.left === null && root.right === null) {
    return false;
  }

  if (value > root.val) {
    return treeBinarySearch(root.right, value);
  }

  if (value < root.val) {
    return treeBinarySearch(root.left, value);
  }

}


var BinaryTree = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.add = function(val) {

  function traverse(node) {

    if (val > node.val) {
      if (node.right === null) {
        let right = new BinaryTree(val);
        node.right = right;
        return;
      }
      traverse(node.right);
    } else {
      if (node.left === null) {
        let left = new BinaryTree(val);
        node.left = left;
        return;
      }
      traverse(node.left);
    }
  }

  traverse(this);

}

let tree = new BinaryTree(5);
tree.add(2);
tree.add(3);
tree.add(1);
tree.add(4);
tree.add(6);
tree.add(8);
tree.add(9);

console.log(tree);

console.log(treeBinarySearch(tree, 7))

