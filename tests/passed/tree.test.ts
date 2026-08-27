import Tree from './../../structures/Tree';
import BinaryTreeNode from './../../structures/BinaryTreeNode';
import TreeNode from './../../structures/TreeNode';

describe('BinaryTreeNode', () => {
  test('конструктор с не-null корнем сохраняет корень', () => {
    const rootNode = new BinaryTreeNode<number>(1);
    const tree = new Tree<number>(rootNode);

    expect(tree.root).toBe(rootNode);
    // ожидаем, что у корня родителя нет
    expect(tree.root.parent).toBeNull();
  });

  test('конструктор с нулевым корнем работает когда root может быть null', () => {
    const tree = new Tree<number>(); // или new Tree<number>(null) если строго типом
    expect(tree.root).toBeNull();
    expect(tree.isEmpty()).toBe(true);
  });

   test('добавление дочерних узлов через узел-родитель сохраняет связи', () => {
    const root = new BinaryTreeNode<number>(10);
    const left = new BinaryTreeNode<number>(5);
    const right = new BinaryTreeNode<number>(15);

    root.addChild(left);
    root.addChild(right);

    const tree = new Tree<number>(root);

    expect(tree.root).toBe(root);
    // если BinaryTreeNode имеет слоты leftNode/rightNode
    expect(root.leftNode).toBe(left);
    expect(root.rightNode).toBe(right);
    expect(left.parent).toBe(root);
    expect(right.parent).toBe(root);
  });
});
describe('Tree (не бинарное дерево) с TreeNode как корнем', () => {
  test('конструктор с TreeNode корнем сохраняет корень и не пуст', () => {
    // создаём корень и дочерний узел
    const child = new TreeNode<number>(2);
    const root = new TreeNode<number>(1, null, [child]);

    // создаём дерево с этим корнем
    const tree = new Tree<number>(root);

    expect(tree.root).toBe(root);
    expect(tree.isEmpty()).toBe(false);

    // проверяем связь корень-дети
    expect(root.children).toContain(child);
    expect(child.parent).toBe(root);
  });

  test('isEmpty возвращает true, когда корня нет (через приведение к any)', () => {
    // имитация пустого дерева
    const tree = new (Tree as any)<number>(null);
    // TS не позволяет напрямую, но runtime работает
    expect(tree.root).toBeNull();
    expect(tree.isEmpty()).toBe(true);
  });

  test('через корень можно добавлять дочерние узлы и сохранять инварианты', () => {
    const root = new TreeNode<number>(10);
    const tree = new Tree<number>(root);

    // добавляем дочернего узла через корень дерева
    const child = new TreeNode<number>(5);
    (tree.root as TreeNode<number>).addChild(child);

    expect(root.children).toContain(child);
    expect(child.parent).toBe(root);
  });
});