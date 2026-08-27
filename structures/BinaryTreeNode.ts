class BinaryTreeNode<T> {
  public value: T;
  public parent: BinaryTreeNode<T> | null;
  public leftNode: BinaryTreeNode<T> | null;
  public rightNode: BinaryTreeNode<T> | null;

  constructor(
    value: T,
    parent?: BinaryTreeNode<T> | null,
    leftNode?: BinaryTreeNode<T>,
    rightNode?: BinaryTreeNode<T>,
  ) {
    this.value = value;
    this.parent = parent || null;

    // если у переданных детей есть свои родители, меняем их на текущий узел, т.к. родитель может быть только 1
    this.leftNode = leftNode ?? null;
    this.rightNode = rightNode ?? null;
    if (leftNode) {
      if (leftNode.parent) {
        leftNode.parent = this;
      }
    }
    if (rightNode) {
      this.rightNode = rightNode;
      if (rightNode.parent) {
        rightNode.parent = this;
      }
    }
  }

  public addChild(node: BinaryTreeNode<T>) {
    if (node instanceof BinaryTreeNode) {
      // если узел уже имеет другого родителя, открепим его от него

      if (!this.leftNode || !this.rightNode) {
        if (node.parent) {
          node.parent.removeChild(node);
        }
        node.parent = this;
      }
      
      if (!this.leftNode) {
        this.leftNode = node;
      } else if (!this.rightNode) {
        this.rightNode = node;
      } else {
        console.error("The tree already has 2 children");
      }
    }
  }

  public removeChild(node: BinaryTreeNode<T>): BinaryTreeNode<T> | null {
    if (node === this.leftNode) {
      node.parent = null;
      this.leftNode = null;
    } else if (node === this.rightNode) {
      node.parent = null;
      this.rightNode = null;
    } else {
      console.error("The node to be removed was not found");
      return null;
    }
    return node;
  }
}

export default BinaryTreeNode;
