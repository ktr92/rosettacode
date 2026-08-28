import { BinarySearchTree } from "../../structures/BinarySearchTree";

describe("BinarySearchTree Variant A (через дерево)", () => {
  test("структура после последовательной вставки", () => {
    const tree = new BinarySearchTree<number>();

    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(12);
    tree.insert(18);

    expect(tree.root).not.toBeNull();
    const root = tree.root as any; // чтобы в тестах не проверять лишнюю логику
    expect(root.value).toBe(10);
    expect(root.leftNode.value).toBe(5);
    expect(root.rightNode.value).toBe(15);
    expect(root.leftNode.leftNode.value).toBe(3);
    expect(root.leftNode.rightNode.value).toBe(7);
    expect(root.rightNode.leftNode.value).toBe(12);
    expect(root.rightNode.rightNode.value).toBe(18);

    // Проверка родительских связей
    expect(root.parent).toBeNull();
    expect(root.leftNode.parent).toBe(root);
    expect(root.rightNode.parent).toBe(root);
  });

  test("удвоение повторяющихся значений идет в правое поддерево", () => {
    const tree = new BinarySearchTree<number>();

    tree.insert(10);
    tree.insert(10);
    tree.insert(10);

    const root = tree.root as any;
    expect(root.value).toBe(10);
    expect(root.rightNode.value).toBe(10);
    expect(root.rightNode.rightNode.value).toBe(10);
  });
});
