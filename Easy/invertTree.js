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
 * @return {TreeNode}
 */
var invertTree = function(root) {

  function inverter(node) {

      if (node === null) {
          return;
      }

      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.right) inverter(node.right);
      if (node.left) inverter(node.left);

  }

  inverter(root);
  return root;

};