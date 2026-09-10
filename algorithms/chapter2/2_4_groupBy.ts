import {
  createLinkedList,
  linkedListToArray,
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

function groupBy(head: SinglyListNode<number>, value: number): SinglyListNode<number> {
  let node = head;
  let newList = null;


  while (node.next) {
    if (node.val < value) {
      console.log(node.next.val)
      newList = node;
    }
    node = node.next
  }

  return newList;
}

const head = createLinkedList([3, 5, 8, 5, 10, 2, 1]);
console.log(linkedListToArray(groupBy(head, 5))); // [3,1,2,10,5,5,8]

export default groupBy;
