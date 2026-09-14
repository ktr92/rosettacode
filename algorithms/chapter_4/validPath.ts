/**
 *  Для заданного направленного графа разработайте алгоритм, проверяющий
существование маршрута между двумя узлами.

 * test('Базовый случай: прямой путь существует', () => {
        const n = 3;
        const edges = [[0, 1], [1, 2], [2, 0]];
        const source = 0;
        const destination = 2;
        
        expect(validPath(n, edges, source, destination)).toBe(true);
    });
 */

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  let bi = true;
  const adjacents: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    adjacents[u].push(v);
    if (bi) {
      adjacents[v].push(u);
    }
  }

  const visited = new Set<number>();

  const queue = [];

  // посещаем старторвый узел
  queue.push(source);
  visited.add(source);

  while (queue.length > 0) {
    // извлекаем первый узел
    const val = queue.shift() as number;
    // проверка на искомое значение
    if (val === destination) return true;
    // добавляем в очередь все узлы с которыми связан текущий
    for (let neighbor of adjacents[val]!) {
      if (visited.has(neighbor)) continue;
      queue.push(neighbor);
      visited.add(neighbor)
    }
  }

  return false;
}
export default validPath;
