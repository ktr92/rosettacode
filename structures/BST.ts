class BinarySearchNode<T> {
  public value: T;
  public parent: BinarySearchNode<T> | null;
  public leftNode: BinarySearchNode<T> | null;
  public rightNode: BinarySearchNode<T> | null;

  constructor(
    value: T
  ) {
    this.value = value;
    this.parent = null;
    this.leftNode = null;
    this.rightNode = null;
  }

  public getValue(): T {
    return this.value;
  }

  public addChild(node: BinarySearchNode<T>) {
    if (node instanceof BinarySearchNode) {
     if (node.getValue() > this.getValue()) {
     }      
    }
  }

  public removeChild(node: BinarySearchNode<T>): BinarySearchNode<T> | null {
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

export default BinarySearchNode;
