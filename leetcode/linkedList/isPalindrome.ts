
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function isPalindrome(head: ListNode | null): boolean {
    let left = head;
    let right = head;
    let current = head;
    
    if (!head.next) return true;
    while (right.next) {
        right = right.next;
    }        

    if (left?.next === right && left.val !== right?.val) return false

    while (left.next !== right && left !== right) {

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

    if (left.val === right.val) {
        return true
    } else {
        return false
    }

};

export default isPalindrome;