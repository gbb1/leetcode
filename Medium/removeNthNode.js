/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

*/

var removeNthFromEnd = function(head, n) {
  let count = 0;
  let prev = null;
  let start = head;
  let track = head;
  let length = 0;

  while (track) {
    track = track.next;
    length++;
  }

  while (head) {
    if (count === (length - n)) {
      if (prev !== null) {
        prev.next = head.next;
      } else {
        start = head.next;
        head.next = null;
      }
      return start;
    }
    count++;
    prev = head;
    head = head.next;
  }
  return start;
};