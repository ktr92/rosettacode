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

function isPalindrome(head: ListNode | null): boolean {
    let left = head;
    let right = head;
    let current = head;
    while (right.next) {
        right = right.next;
    }        
    while (left.next !== right || left !== right) {
        console.log(right.val)
        current = left;
        while (current.next !== right) {
            current = current.next;
        }    
        if (current === left && current.val === current.next.val) {
            return true
        }
        if (left.val === right.val) {
            left = left.next;
            right = current;
        } else {
            return false
        }
        
    }

    return true
};