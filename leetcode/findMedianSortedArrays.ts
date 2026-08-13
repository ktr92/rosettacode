function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  let index = 0;
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  let targetindex = isEven ? totalLength / 2 - 1 : Math.floor(totalLength / 2);

  let k1 = 0;
  let k2 = 0;
  let head = new ListNode(0, null);


  const getMiddle = (arr: number[]) => {
    if (arr.length % 2 === 0) {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  };

  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }

  if (!nums1.length) {
    if (nums2.length < 2) return nums2[0];
    return getMiddle(nums2);
  }
  if (!nums2.length) {
    if (nums1.length < 2) return nums1[0];
    return getMiddle(nums1);
  }
  let min = -Infinity;

  const nextNode = (node: ListNode, prev?: number | null) => {

    let min1 = nums1[k1];
    let min2 = nums2[k2];
    if (k1 >= nums1.length) {
      min = min2;
      k2++
    }
    if (k2 >= nums2.length) {
      min = min1;
      k1++
    }
    if (typeof min1 !== "undefined" && typeof min2 !== "undefined") {
      if (min1 <= min2) {
        min = min1;
        k1++;
      } else {
        min = min2;
        k2++;
      }
    }

    node.val = min;
    node.next = new ListNode(0, null);

    if (isEven && index >= targetindex) {
      if (typeof prev === "number") {
        return (node.val + prev) / 2;
      } else {
        prev = node.val;
        index++;
        return nextNode(node.next, prev);
      }
    }
    if (!isEven && index >= targetindex) return node.val;

    index++;
    return nextNode(node.next);
  };

  return nextNode(head);
}

module.exports = findMedianSortedArrays