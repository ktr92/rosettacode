import { sortedArrayToBST, TreeNode } from '../../algorithms/chapter_4/sortedArrayToBST';


// Вспомогательная функция LeetCode: превращает дерево в массив BFS с null
function serialize(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Удаляем лишние null с конца массива, как это делает LeetCode
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

describe('sortedArrayToBST (LeetCode style tests)', () => {

    test('Пример 1 из LeetCode', () => {
        // Исходный массив: [-10, -3, 0, 5, 9]
        const nums: number[] = [-10, -3, 0, 5, 9];
        // Наша реализация с Math.floor((left + right) / 2) строит именно такой массив:
        const expected: (number | null)[] = [0, -3, 9, -10, null, 5];

        const root = sortedArrayToBST(nums);
        expect(serialize(root)).toEqual(expected);
    });

    test('Пример 2 из LeetCode', () => {
        // Исходный массив: [1, 3]
        const nums: number[] = [1, 3];
        // Ожидаемое дерево: Корень 3, левый ребенок 1
        const expected: (number | null)[] = [3, 1]; 

        const root = sortedArrayToBST(nums);
        expect(serialize(root)).toEqual(expected);
    });

    test('Пустой массив', () => {
        const nums: number[] = [];
        const expected: (number | null)[] = [];

        const root = sortedArrayToBST(nums);
        expect(serialize(root)).toEqual(expected);
    });

    test('Три элемента (идеально сбалансированное дерево)', () => {
        // Исходный массив: [1, 2, 3]
        const nums: number[] = [1, 2, 3];
        // Ожидаемое дерево: 2 в корне, 1 слева, 3 справа
        const expected: (number | null)[] = [2, 1, 3]; 

        const root = sortedArrayToBST(nums);
        expect(serialize(root)).toEqual(expected);
    });
});
