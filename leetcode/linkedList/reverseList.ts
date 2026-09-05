/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head.next) return true;

    let current = head;

   
    let reversed = null;
    
    while (current !== null) {
        let swap = current.next;
        current.next = reversed;
        reversed = current
        current = swap;
    }
   

    while (head?.next || reversed?.next) {
        if (reversed.val !== head.val) return false;

        reversed = reversed.next;
        head = head.next;
    }
};