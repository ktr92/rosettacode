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
  const toAdjacencyList = (bi: boolean) => {
    const list: number[][] = [];
    for (let i = 0; i < edges.length; i++) {
      const v = edges[i]![0] as number;
      const e = edges[i]![1] as number;

      if (typeof list[v] !== "undefined") {
        list[v].push(e);
      } else {
        list[v] = [];
        list[v].push(e)
      }

      if (bi) {
        if (typeof list[e] !== "undefined") {
        list[e].push(v);
      } else {
        list[e] = [];
        list[e].push(v)
      }
      }
    }
    return list;
  };
  const visited: boolean[] = [];
  const visit = (value: number) => {
    if (visited[value]) return;
    visited[value] = true;
  };

  const adjacents = toAdjacencyList(true);
  const queue = [];

  // посещаем старторвый узел
  queue.push(source);
  visit(source);

  while (queue.length) {
    // извлекаем первый узел
    const val = queue.shift();
    // проверка на искомое значение
    if (val === destination) return true;
    // помечаем как посещенный
    visit(val);
    // добавляем в очередь все узлы с которыми связан текущий
    if (adjacents[val]) {
      for (let i = 0; i < adjacents[val].length; i++) {
       if (visited[adjacents[val][i]]) continue
        queue.push(adjacents[val][i]);
      }
    }
  }

  return false;
}
export default validPath;
