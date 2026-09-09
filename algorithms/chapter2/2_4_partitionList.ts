import {
  createLinkedList,
  createSinglyLinkedList,
  linkedListToArray,
  linkedSinglyListToArray,
  ListNode,
  SinglyListNode,
} from "../../structures/linkedList_simple";

/**
 Напишите код для разбиения связного списка вокруг значениях, так чтобы
 все узлы, меньшие х, предшествовали узлам, большим или равным х. Если х
 содержится в списке, то значениях должны следовать строго после элементов, меньших х (см. далее). Элемент разбивки х может находиться где угодно
 в «правой части»; он не обязан располагаться между левой и правой частью.
 Пример:
 Ввод: 3,5,8,5,10,2,1 [значение разбивки= 5]
 Вывод: 3,1,2,10,5,5,8

 */

function partitionList(head: SinglyListNode<number>, value: number): SinglyListNode<number> {
  let less = new SinglyListNode(0, null);
  let greater = new SinglyListNode(0, null);

  const newTail = greater;
  const newHead = less;

  let node = head;
  while (node.next) {
    if (node.val < value) {
      less.next = node;
      less = less.next
    } else {
      greater.next = node;
      greater = greater.next;
    }
    node = node.next;
   
  }
  greater.next = null;
  less.next = newTail.next;
  return newHead.next;
}

const head = createSinglyLinkedList([3, 5, 8, 5, 10, 2, 1]);
console.log(linkedSinglyListToArray(partitionList(head, 5))); // [3,1,2,10,5,5,8]

export default partitionList;
