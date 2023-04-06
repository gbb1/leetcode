/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

  let memo = new Map();
  let last = null;
  let curr = head;
  let start;

  while (curr) {
      let newNode = new Node(curr.val);

      memo.set(curr, newNode);

      if (last !== null) {
          memo.get(last).next = memo.get(curr);
      }

      last = curr;
      curr = curr.next;
  }

  let newHead = start;

  curr = head;
  while (curr) {
      memo.get(curr).random = memo.get(curr.random);
      curr = curr.next;
  }

  return memo.get(head);

};