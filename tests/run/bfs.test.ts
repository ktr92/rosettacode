// breadthFirstSearch.test.ts
import Tree from "../../structures/Tree";
import TreeNode from "../../structures/TreeNode";
import BinaryTreeNode from "../../structures/BinaryTreeNode";
import breadthFirstSearch from "../../structures/BFS";

type NodeT<T> = TreeNode<T> | BinaryTreeNode<T>;

describe("breadthFirstSearch (BFS) для TreeNode и BinaryTreeNode", () => {
  test("находит значение в TreeNode-дереве (через TreeNode -> children)", () => {
    // Конструкторы зависят от вашей реализации TreeNode
    // Предположим, TreeNode(value, children)
    const left = new TreeNode<number>(2);
    const right = new TreeNode<number>(3);
    const root = new TreeNode<number>(1, null, [left, right]);

    const tree = new Tree<number>(root);
    const found = breadthFirstSearch<number>(tree, 3);

    expect(found).not.toBeNull();
    // найденный узел должен иметь метод getValue()
    expect((found as TreeNode<number>).getValue()).toBe(3);
  });

  test("находит значение в BinaryTreeNode-дереве (через leftNode/rightNode)", () => {
    const left = new BinaryTreeNode<number>(2);
    const right = new BinaryTreeNode<number>(3);
    const root = new BinaryTreeNode<number>(1, left, right);

    const tree = new Tree<number>(root);

    const found = breadthFirstSearch<number>(tree, 3);
    expect(found).not.toBeNull();
    expect((found as BinaryTreeNode<number>).getValue()).toBe(3);
  });

  test("возвращает null, если значение не найдено", () => {
    const root = new TreeNode<number>(1, [new TreeNode<number>(2)]);
    const tree = new Tree<number>(root);

    const found = breadthFirstSearch<number>(tree, 99);
    expect(found).toBeNull();
  });

  test("возвращает null для пустого дерева", () => {
    const tree = new Tree<number>(null);
    const found = breadthFirstSearch<number>(tree, 1);
    expect(found).toBeNull();
  });
});