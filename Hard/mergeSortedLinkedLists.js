
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let out = null;
    let start = null;
    let min;
    let next;
    let index;


    while (lists.some((l) => l)) {
        min = +Infinity;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i] !== null) {
                if (lists[i].val < min) {
                    min = lists[i].val;
                    next = new ListNode(min);
                    index = i;
                }
            }
            continue;
        }


        if (out === null) {
            out = next;
            start = out;
        } else {
            out.next = next;
            out = out.next;
        }

        lists[index] = lists[index].next;

    }
    return start;

};