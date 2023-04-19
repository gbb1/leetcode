/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

  let curr = head;
  let fast = head?.next;

  while (curr && fast) {

      while (fast && curr.val === fast.val) {
          fast = fast.next;
      }

      curr.next = fast;
      curr = curr.next;
      fast = fast?.next;

  }

  return head;

};