function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list2) {
    return list1 ? list1 : null;
  }
  if (!list1) {
    return list2 ? list2 : null;
  }

  if (list1.val <= list2.val) {
    if (list2.next) {
      if (list1.next) {
        if (list2.val <= list1.next.val) {
          const next1 = list1?.next;
          const next2 = list2?.next;
          list1.next = list2;
          list1.next.next = mergeTwoLists(next1, next2);
        } else {
          const next1 = list1?.next;
          const next2 = list2;
          list1.next = mergeTwoLists(next1, next2);
        }
      } else {
        list1.next = list2;
        return list1;
      }
    } else {
      if (!list1.next) {
        list1.next = list2;
        return list1;
      } else {
        const next1 = list2;
        const next2 = list1.next;
        list1.next = mergeTwoLists(next1, next2);
      }
    }
    return list1;
  } else {
    if (list1.next) {
      if (list2.next) {
        if (list2.val <= list2.next.val) {
          const next1 = list2?.next;
          const next2 = list1;
          list2.next = mergeTwoLists(next1, next2);
        } else {
          const next1 = list2?.next;
          const next2 = list1;
          list2.next = mergeTwoLists(next1, next2);
        }
      } else {
        list2.next = list1;
        return list2;
      }
    } else {
      if (!list2.next) {
        list2.next = list1;
        return list2;
      } else {
        const next1 = list1;
        const next2 = list2.next;
        list2.next = mergeTwoLists(next1, next2);
      }
    }
    return list2;
  }
}
