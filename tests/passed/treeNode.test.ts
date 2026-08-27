import TreeNode from '../../structures/TreeNode.ts';

describe('TreeNode', () => {
  test('initializes with given children and sets their parent', () => {
    const child1 = new TreeNode<number>(2);
    const child2 = new TreeNode<number>(3);
    const root = new TreeNode<number>(1, null, [child1, child2]);

    expect(root.children.length).toBe(2);
    expect(child1.parent).toBe(root);
    expect(child2.parent).toBe(root);
  });

  test('addChild attaches a new child and sets its parent', () => {
    const root = new TreeNode<string>('root');
    const child = new TreeNode<string>('child');
    root.addChild(child);

    expect(root.children).toContain(child);
    expect(child.parent).toBe(root);

  });

  test('reparents a node when adding to another parent', () => {
    const root1 = new TreeNode<number>(1);
    const root2 = new TreeNode<number>(2);
    const child = new TreeNode<number>(3);

    root1.addChild(child);
    expect(child.parent).toBe(root1);
    expect(root1.children).toContain(child);
    expect(root2.children).not.toContain(child);

    root2.addChild(child);
    expect(child.parent).toBe(root2);
    expect(root2.children).toContain(child);
    expect(root1.children).not.toContain(child);
  });

  test('removeChild detaches child and clears parent', () => {
    const root = new TreeNode<string>('root');
    const child = new TreeNode<string>('child');
    root.addChild(child);

    const removed = root.removeChild(child);
    expect(removed).toBe(child);
    expect(child.parent).toBeNull();
    expect(root.children).not.toContain(child);

    // повторный вызов возвращает null
    expect(root.removeChild(child)).toBeNull();
  });
});