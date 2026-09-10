import {
  createLinkedList,
  linkedListToArray,
  SinglyListNode,
} from "../../structures/linkedList_simple";
import removeValue from "../../algorithms/chapter2/2_3_removeValue";

describe("removeValue (удаление переданного узла)", () => {
  function createNode(value: number, next: any = null) {
    return { value, next };
  }

  test("должен корректно удалить узел из середины списка", () => {
    const head = createLinkedList([10, 20, 30, 40, 50]);

    // Находим узел со значением 30 (третий по счету, то есть из середины)
    const targetNode = head!.next!.next!; // Узел 30

    removeValue(head, targetNode);

    expect(linkedListToArray(head)).toEqual([10, 20, 40, 50]);
  });

  test("должен корректно удалить второй узел в списке из трех элементов", () => {
    const head = createLinkedList([1, 2, 3]);
    const targetNode = head!.next!; // Узел 2

    removeValue(head, targetNode);

    expect(linkedListToArray(head)).toEqual([1, 3]);
  });

  test("должен корректно удалить предпоследний узел списка", () => {
    const head = createLinkedList([100, 200, 300, 400]);
    const targetNode = head!.next!.next!; // Узел 300

    removeValue(head, targetNode);

    expect(linkedListToArray(head)).toEqual([100, 200, 400]);
  });

  test("не должен изменять список, если передан пустой список", () => {
    const head = null;
    const dummyNode: SinglyListNode<number> = { value: 99, next: null };

    expect(() => removeValue(head, dummyNode)).not.toThrow();
  });

  test("Упадет с ошибкой, если искомого узла/значения нет в списке", () => {
    const node3 = createNode(30);
    const node2 = createNode(20, node3);
    const head = createNode(10, node2);

    const missingNode = createNode(999); 
    expect(() => {
      removeValue(head, missingNode);
    }).toThrow(TypeError);
  });



  test("Удалит не тот узел, если в списке есть элементы с одинаковыми числами", () => {
    const node4 = createNode(40);
    const node3 = createNode(20, node4); // ВТОРАЯ двадцатка (целевая)
    const node2 = createNode(30, node3);
    const head = createNode(20, node2); // ПЕРВАЯ двадцатка

    removeValue(head, node3);

    expect(head.next).toBe(node2); 
  });

  test("Упадет с ошибкой, если в списке всего один узел", () => {
    const head = createNode(10);
    const target = createNode(20);

    expect(() => {
      removeValue(head, target);
    }).toThrow(TypeError);
  });
});
