/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var output = [];

var mergeTwoLists = function(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    let prev = null;
    let start = null;

    while (curr1 || curr2) {

        if (curr1?.val <= curr2?.val) {
            if (prev === null) {
                prev = curr1;
                start = prev;
            } else {
                prev.next = curr1;
                prev = prev.next;
            }
            curr1 = curr1.next;
        } else if (curr1?.val > curr2?.val) {
            if (prev === null) {
                prev = curr2;
                start = prev;
            } else {
                prev.next = curr2;
                prev = prev.next;
            }
            curr2 = curr2.next;
        } else {
            if (curr2 === null) {
                if (prev === null) {
                    prev = curr1;
                    start = prev;
                } else {
                    prev.next = curr1;
                    prev = prev?.next;
                }
                curr1 = curr1.next;
            } else {
                if (prev === null) {
                    prev = curr2;
                    start = prev;
                } else {
                    prev.next = curr2;
                    prev = prev?.next;
                }
                curr2 = curr2.next;
            }
        }
    }

    return start;

};