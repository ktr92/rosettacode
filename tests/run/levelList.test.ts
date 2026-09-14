import { listOfDepths, TreeNode } from "../../algorithms/chapter_4/listOfDepths";

describe('listOfDepths', () => {
    
    /* test('Должен вернуть пустой массив для пустого дерева', () => {
        expect(listOfDepths(null)).toEqual([]);
    }); */

    test('Должен корректно сгруппировать узлы сбалансированного дерева по уровням', () => {
        /*
         * Строим дерево из примера:
         *         5
         *       /   \
         *      3     8
         *     / \     \
         *    1   4     9
         */
        const root = new TreeNode(5,
            new TreeNode(3, new TreeNode(1), new TreeNode(4)),
            new TreeNode(8, null, new TreeNode(9))
        );

        const result = listOfDepths(root);

        // Ожидаем 3 уровня (3 списка)
        expect(result.length).toBe(3);

        // Уровень 0: 5 -> null
        expect(result[0]?.val).toBe(5);
        expect(result[0]?.next).toBeNull();

        // Уровень 1: 3 -> 8 -> null
        expect(result[1]?.val).toBe(3);
        expect(result[1]?.next?.val).toBe(8);
        expect(result[1]?.next?.next).toBeNull();

        // Уровень 2: 1 -> 4 -> 9 -> null
        expect(result[2]?.val).toBe(1);
        expect(result[2]?.next?.val).toBe(4);
        expect(result[2]?.next?.next?.val).toBe(9);
        expect(result[2]?.next?.next?.next).toBeNull();
    });

   /*  test('Должен работать с несбалансированным деревом (все узлы справа)', () => {
        //
         * Строим дерево-линию:
         *    1
         *     \
         *      2
         *       \
         *        3
        //
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));

        const result = listOfDepths(root);

        expect(result.length).toBe(3);

        // На каждом уровне должно быть строго по одному элементу
        expect(result[0]?.val).toBe(1);
        expect(result[0]?.next).toBeNull();

        expect(result[1]?.val).toBe(2);
        expect(result[1]?.next).toBeNull();

        expect(result[2]?.val).toBe(3);
        expect(result[2]?.next).toBeNull();
    }); */
});