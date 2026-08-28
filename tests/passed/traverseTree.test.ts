import Tree from "../../structures/Tree";
import TreeNode from "../../structures/TreeNode";
import BinaryTreeNode from "../../structures/BinaryTreeNode";
import traverseTree from "../../structures/traverseTree";

type Node<T> = TreeNode<T> | BinaryTreeNode<T>;

describe("traverseTree (BFS) — вывод всех значений в порядке обхода", () => {
  test("TreeNode-дерево: корень с двумя детьми", () => {
    // Структура:      1
    //                / \
    //               2   3
    const left = new TreeNode<number>(2, null,[]);
    const right = new TreeNode<number>(3, null, []);
    const root = new TreeNode<number>(1, null, [left, right]);
    const tree = new Tree<number>(root);

    const result = traverseTree<number>(tree);
    expect(result).toEqual([1, 2, 3]);
  });

  test("BinaryTreeNode-дерево: корень с левым и правым потомками", () => {
    // Структура: 1
    //            / \
    //           2   3
    const left = new BinaryTreeNode<number>(2);
    const right = new BinaryTreeNode<number>(3);
    const root = new BinaryTreeNode<number>(1, null, left, right);
    const tree = new Tree<number>(root);

    const result = traverseTree<number>(tree);
    expect(result).toEqual([1, 2, 3]);
  });

  test("Смешанное дерево: корень TreeNode, потомок BinaryTreeNode", () => {
    // Структура:
    //       1
    //       |
    //       2
    //      / \
    //     4   5
    const binaryChild = new BinaryTreeNode<number>(2, new BinaryTreeNode<number>(4), new BinaryTreeNode<number>(5));
    const root = new TreeNode<number>(1, null, [binaryChild]);
    const tree = new Tree<number>(root);

    const result = traverseTree<number>(tree);

    console.log(result)
    expect(result).toEqual([1, 2, 4, 5]);
  });

  test("Пустое дерево возвращает пустой массив", () => {
    const tree = new Tree<number>(null);
    const result = traverseTree<number>(tree);
    expect(result).toEqual([]);
  });
});