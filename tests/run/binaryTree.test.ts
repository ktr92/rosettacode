// tests/BinaryTreeNode.test.ts
import BinaryTreeNode from '../../structures/BinaryTreeNode';

describe('BinaryTreeNode', () => {
  test('конструктор с предустановленными детьми устанавливает их родителя (если они имели родителя)', () => {
    const leftWithParent = new BinaryTreeNode<number>(2, new BinaryTreeNode<number>(0));
    const rightWithParent = new BinaryTreeNode<number>(3, new BinaryTreeNode<number>(0));

    const root = new BinaryTreeNode<number>(1, null, leftWithParent, rightWithParent);

    expect(root.leftNode).toBe(leftWithParent);
    expect(root.rightNode).toBe(rightWithParent);
    // так как у leftWithParent и rightWithParent были родители, они должны были получить root как родителя
    expect(leftWithParent.parent).toBe(root);
    expect(rightWithParent.parent).toBe(root);
  });

  test('addChild добавляет левого затем правого потомка и устанавливает родителя', () => {
    const root = new BinaryTreeNode<string>('root');
    const left = new BinaryTreeNode<string>('left');
    root.addChild(left);

    expect(root.leftNode).toBe(left);
    expect(left.parent).toBe(root);

    const right = new BinaryTreeNode<string>('right');
    root.addChild(right);

    expect(root.rightNode).toBe(right);
    expect(right.parent).toBe(root);
  });

  test('reparent перемещает узел в нового родителя', () => {
    const rootA = new BinaryTreeNode<number>(1);
    const rootB = new BinaryTreeNode<number>(2);
    const child = new BinaryTreeNode<number>(3);

    rootA.addChild(child);
    expect(child.parent).toBe(rootA);
    expect(rootA.leftNode).toBe(child);

    // перемещаем в другой родитель
    rootB.addChild(child);
    expect(child.parent).toBe(rootB);
    expect(rootB.leftNode).toBe(child);
    expect(rootA.leftNode).toBeNull();
  });

  test('removeChild удаляет потомка и обнуляет родителя', () => {
    const root = new BinaryTreeNode<string>('root');
    const child = new BinaryTreeNode<string>('child');
    root.addChild(child);

    const removed = root.removeChild(child);
    expect(removed).toBe(child);
    expect(child.parent).toBeNull();
    expect(root.leftNode).toBeNull(); // так как это первый (левый) слот
  });

  test('третьего потомка не добавляет и не меняет инварианты', () => {
    const root = new BinaryTreeNode<number>(0);
    const a = new BinaryTreeNode<number>(1);
    const b = new BinaryTreeNode<number>(2);
    const c = new BinaryTreeNode<number>(3);

    root.addChild(a);
    root.addChild(b);

    // пытаемся добавить третьего
    root.addChild(c);

    // должны остаться только два слота
    expect(root.leftNode).toBe(a);
    expect(root.rightNode).toBe(b);
    expect(c.parent).toBeNull();
  });

  test('removeChild на несуществующем узле возвращает null', () => {
    const root = new BinaryTreeNode<number>(0);
    const nonChild = new BinaryTreeNode<number>(1);

    expect(root.removeChild(nonChild)).toBeNull();
  });
});