
class BinarySearchTree<T> {
  constructor() {}
  public root: BinarySearchNode<T> | null = null;
  public insert(value: T) {
      const newNode = new BinarySearchNode(value);
      if (!this.root) {
        this.root = newNode
        this.root.parent = null
      } else {
        this.root.insert(newNode);
      }
  }
}

class BinarySearchNode<T> {
  public parent!: BinarySearchNode<T> | null;
  public leftNode!: BinarySearchNode<T> | null;
  public rightNode!: BinarySearchNode<T> | null;

  constructor(public value: T) {}

  public getValue(): T {
    return this.value;
  }

  public insert(newNode: BinarySearchNode<T>) {
    if (newNode instanceof BinarySearchNode) {
      if (newNode.getValue() < this.getValue()) {
        // если нет левого, ставим его левым. Если есть левый, то применяем проверку к нему.
        if (!this.leftNode) {
          this.leftNode = newNode;
          newNode.parent = this
        } else {
          this.leftNode.insert(newNode);
        }
      } else {
        // если нет правого, ставим его правым. Если есть правый, то применяем проверку к нему.
        if (!this.rightNode) {
          this.rightNode = newNode;
          newNode.parent = this
        } else {
          this.rightNode.insert(newNode);
        }
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

export { BinarySearchTree, BinarySearchNode };
