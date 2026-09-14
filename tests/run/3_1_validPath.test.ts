import validPath from "../../algorithms/chapter_4/validPath";

describe('validPath', () => {
    
    test('Базовый случай: прямой путь существует', () => {
        const n = 3;
        const edges = [[0, 1], [1, 2], [2, 0]];
        const source = 0;
        const destination = 2;
        
        expect(validPath(n, edges, source, destination)).toBe(true);
    });
    test('Путь отсутствует', () => {
        const n = 6;
        const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
        const source = 0;
        const destination = 5;
        
        expect(validPath(n, edges, source, destination)).toBe(false);
    });
    test('Базовый случай: прямой путь существует', () => {
        const n = 10;
        const edges = [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]];
        const source = 7;
        const destination = 5;
        
        expect(validPath(n, edges, source, destination)).toBe(true);
    });

    test('Путь отсутствует в изолированном графе', () => {
        const n = 6;
        const edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]];
        const source = 0;
        const destination = 5;
        
        // Узлы 0 и 5 находятся в разных компонентах связности
        expect(validPath(n, edges, source, destination)).toBe(false);
    });

    test('Граф из одного узла (начало и конец совпадают)', () => {
        const n = 1;
        const edges: number[][] = [];
        const source = 0;
        const destination = 0;
        
        expect(validPath(n, edges, source, destination)).toBe(true);
    });

    test('Большой линейный граф (проверка на переполнение стека / Stack Overflow)', () => {
        const n = 1000;
        const edges: number[][] = [];
        for (let i = 0; i < n - 1; i++) {
            edges.push([i, i + 1]);
        }
        const source = 0;
        const destination = 999;
        
        expect(validPath(n, edges, source, destination)).toBe(true);
    });

    test('Граф с циклами (проверка на бесконечный цикл)', () => {
        const n = 4;
        const edges = [[0, 1], [1, 2], [2, 0], [2, 3]];
        const source = 0;
        const destination = 3;
        
        // Алгоритм должен корректно обработать цикл 0->1->2->0 и найти путь к 3
        expect(validPath(n, edges, source, destination)).toBe(true);
    });
});
