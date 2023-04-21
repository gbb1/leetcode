/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  let levels = [root];
  let count = 0;
  let ans = [];

  while (levels.length) {

      let len = levels.length, row = [];
      for (let i = 0; i < len; i++) {
          let curr = levels.shift();
          if (curr) row.push(curr.val)
          if (curr?.left) levels.push(curr.left)
          if (curr?.right) levels.push(curr.right)
      }
      if (row.length) ans.push(row);

  }

  return ans;
};