import {
  createSinglyLinkedList,
  SinglyListNode,
} from "../../structures/linkedList_simple";
import cycleNode from "../../algorithms/chapter2/2_8_cyclicList";

describe("", () => {
  // Вспомогательная функция для поиска узла по значению, чтобы замкнуть петлю
  function findNode(
    head: SinglyListNode<string>,
    value: string,
  ): SinglyListNode<string> | null {
    let current: SinglyListNode<string> | null = head;
    while (current) {
      if (current.val === value) return current;
      current = current.next;
    }
    return null;
  }

  // Вспомогательная функция для поиска последнего узла (хвоста)
  function getTail(head: SinglyListNode<string>): SinglyListNode<string> {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  test("должен возвращать узел C для примера A -> B -> C -> D -> E -> C", () => {
    const head = createSinglyLinkedList(["A", "B", "C", "D", "E", "F"]);

    // Находим узел 'C' и хвост 'F', затем замыкаем петлю: F -> C
    const targetNode = findNode(head, "C");
    const tailNode = getTail(head);

    if (tailNode && targetNode) {
      tailNode.next = targetNode;
    }

    const result = cycleNode(head);
    expect(result).toBe(targetNode);
    expect(result?.val).toBe("C");
  });

  test("должен возвращать null, если список линейный и не имеет петли", () => {
    const head = createSinglyLinkedList(["A", "B", "C", "D", "E"]);

    const result = cycleNode(head);
    expect(result).toBeNull();
  });
});
