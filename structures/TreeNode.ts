 class TreeNode<T> {
  public value: T;
  public parent: TreeNode<T> | null;
  public children: TreeNode<T>[];

  constructor(value: T, parent?: TreeNode<T> | null, children?: TreeNode<T>[]) {
    this.value = value;
    this.parent = parent || null;
    // копируем массив, чтобы внешний код не мог напрямую менять внутренний массив
    this.children = [...(children ?? [])];
    // если у переданных детей есть свои родители, меняем их на текущий узел, т.к. родитель может быть только 1
    for (const child of this.children) {
      child.parent = this;
    }
  }

  public addChild(node: TreeNode<T>) {
    if (node instanceof TreeNode) {
      // если узел уже имеет другого родителя, открепим его от него
      if (node.parent) {
        node.parent.removeChild(node);
      }
      this.children.push(node);
      node.parent = this;
    }
  }

  public removeChild(node: TreeNode<T>): TreeNode<T> | null {
    const childIndex = this.children.indexOf(node);
    if (childIndex === -1) return null;
    node.parent = null;
    return this.children.splice(childIndex, 1)[0] as TreeNode<T>;
  }
}

export default TreeNode;