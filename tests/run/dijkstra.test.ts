// tests/weightedGraph.jest.test.ts

import { describe, test, expect } from "@jest/globals";
import { WeightedGraph } from "../../structures/dijkstra"; // поправь путь под свой проект

describe("WeightedGraph.shortestPath — тесты Jest + TS", () => {
  test("test 0: простой маленький граф", () => {
    const g = new WeightedGraph<string>([
      ["S", "A", 6],
      ["S", "B", 2],
      ["A", "F", 1],
      ["B", "A", 3],
      ["B", "F", 5],
    ]);
    const dist = g.shortestPath("S", "F");
    expect(dist).toBe(6); // S -> B -> A -> F
  });
  test("test 1: простой маленький граф", () => {
    // A -> B (1), B -> D (5), A -> C (2), C -> D (2)
    const g = new WeightedGraph<string>([
      ["A", "B", 1],
      ["B", "D", 5],
      ["A", "C", 2],
      ["C", "D", 2],
    ]);
    const dist = g.shortestPath("A", "D");
    expect(dist).toBe(4); // A -> C -> D
  });

  test("test 2: несколько путей, одинаковая минимальная стоимость", () => {
    // A -> B (1), B -> D (3), A -> C (1), C -> D (3)  -> обе дороги дают 4
    const g = new WeightedGraph<string>([
      ["A", "B", 1],
      ["B", "D", 3],
      ["A", "C", 1],
      ["C", "D", 3],
    ]);
    const dist = g.shortestPath("A", "D");
    expect(dist).toBe(4);
  });

  test("test 3: отсутствие пути", () => {
    // A -> B (1), B -> C (2) ; D недостижим
    const g = new WeightedGraph<string>([
      ["A", "B", 1],
      ["B", "C", 2],
    ]);
    const dist = g.shortestPath("A", "D");
    expect(dist).toBeUndefined();
  });

/*   test("test 4: граф с циклом", () => {
    // A -> B 2, B -> C 2, C -> A 1 (цикл), B -> D 5, C -> D 1
    // минимальный A -> D: A-B-D (7) vs A-B-C-D (2+2+1=5) -> 5
    const g = new WeightedGraph<string>([
      ["A", "B", 2],
      ["B", "C", 2],
      ["C", "A", 1],
      ["B", "D", 5],
      ["C", "D", 1],
    ]);
    const dist = g.shortestPath("A", "D");
    expect(dist).toBe(5);
  });
 */
  test("test 5: крупный граф", () => {
    // Пример большого графа для проверки производительности и корректности
    // A -> B 2, A -> C 4, B -> D 7, C -> D 1, D -> E 3, B -> E 1, E -> F 2, D -> F 5,
    // A -> F 20, E -> G 4, F -> G 1, G -> H 2
    // Кратчайшее A -> H: A->B->E->G->H = 2 + 1 + 4 + 2 = 9
    const g = new WeightedGraph<string>([
      ["A", "B", 2],
      ["A", "C", 4],
      ["B", "D", 7],
      ["C", "D", 1],
      ["D", "E", 3],
      ["B", "E", 1],
      ["E", "F", 2],
      ["D", "F", 5],
      ["A", "F", 20],
      ["E", "G", 4],
      ["F", "G", 1],
      ["G", "H", 2],
    ]);
    const dist = g.shortestPath("A", "H");
    expect(dist).toBe(8);
  });
});
