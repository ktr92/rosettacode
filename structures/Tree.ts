import TreeNode from "./TreeNode";
import BinaryTreeNode from "./BinaryTreeNode";

type universalTreeNode<T> = TreeNode<T> | BinaryTreeNode<T>;

class Tree<T> {
  public root: universalTreeNode<T> | null;

  constructor(root: universalTreeNode<T> | null = null) {
    this.root = root;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }
}

export default Tree;