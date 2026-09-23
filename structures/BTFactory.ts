import BinaryTreeNode from "./BinaryTreeNode";

export class TreeFactory {
  static createTree<T>(arr: (T | null)[]): BinaryTreeNode<T> | null {
    if (arr.length === 0 || arr[0] === null) return null;

    // Создаем корень дерева
    const root = new BinaryTreeNode<T>(arr[0]);
    
    // Очередь хранит узлы, которым мы СЕЙЧАС заполняем детей
    const queue: BinaryTreeNode<T>[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift()!;

      // Пытаемся добавить левого ребенка
      if (i < arr.length) {
        const leftVal = arr[i++];
        if (leftVal !== null && leftVal !== undefined) {
          const leftNode = new BinaryTreeNode<T>(leftVal);
          current.leftNode = leftNode; 
          queue.push(leftNode);
        }
      }

      // Пытаемся добавить правого ребенка
      if (i < arr.length) {
        const rightVal = arr[i++];
        if (rightVal !== null && rightVal !== undefined) {
          const rightNode = new BinaryTreeNode<T>(rightVal);
          current.rightNode = rightNode; 
          queue.push(rightNode);
        }
      }
    }

    return root;
  }
}
export { BinaryTreeNode };

