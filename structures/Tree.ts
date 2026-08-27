import TreeNode from "./TreeNode";
import BinaryTreeNode from "./BinaryTreeNode";

type universalTreeNode<T> = TreeNode<T> | BinaryTreeNode<T>;

class Tree<T> {
  public root: universalTreeNode<T> | null;

  constructor(root: universalTreeNode<T>) {
    if (root instanceof TreeNode || root instanceof BinaryTreeNode) {
      this.root = root;
    } else {
      this.root = null;
    }
  }

  public isEmpty(): boolean {
    const isRoot =
      this.root instanceof TreeNode || this.root instanceof BinaryTreeNode;
    return !isRoot;
  }
}

export default Tree;
