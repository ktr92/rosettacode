/**
 * алгоритм Дейкстры состоит из четырех шагов.
1. Найти узел с наименьшей стоимостью (то есть узел, до которого можно
добраться за минимальное время).
2. Проверить, существует ли более дешевый путь к соседям этого узла,
и если существует, обновить их стоимости.
3. Повторять, пока это не будет сделано для всех узлов графа.
4. Вычислить итоговый путь


Input: n = 3, edges = [[1,2,2],[1,3,4]]
1 - (2) - 2
|
(4)
|
3


Input: n = 4, edges =  
  ["S", "A", 6],
  ["S", "B", 2],
  ["A", "F", 1],
  ["B", "A", 3],
  ["B", "F", 5],
 */
class WeightedGraph<T> {
  // узел -> соседи -> соответствующие ребра
  private nodeMap = new Map();
  private costMap = new Map();

  constructor(public edges: Array<[T, T, number]>) {
    this.edges = edges;
    this.initEdges();
  }
  initEdges() {
    for (let i = 0; i < this.edges.length; i++) {
      const [from, to, weight] = this.edges[i] as [T, T, number];
      if (!this.nodeMap.has(from)) {
        // если этот from ранее не встречался, создаем map
        const neighbourMap = new Map();
        this.nodeMap.set(from, neighbourMap);
        neighbourMap.set(to, weight);
      } else {
        // если этот from ранее встречался, дополняем map новым путем
        const neighbourMap = this.nodeMap.get(from);
        neighbourMap.set(to, weight);
      }
    }
    console.log(this.nodeMap);
  }
  shortestPath(start: T, end: T) {
    let currentPath = this.nodeMap.get(start);
    let currentNode = start;
    let minKey = start;
    let temp = 3;

    while (temp) {
      if (!currentPath) return minKey;
      for (const [k, v] of currentPath.entries()) {
        let minValue = Infinity;
        // выбор минимального из соседей на старте
        if (v < minValue) {
          minValue = v;
          minKey = k;
        }

        // обновление стоимости достижения вершин
        
        if (!this.costMap.has(k)) {
          this.costMap.set(k,  this.costMap.get(minKey) + v);
        } else {
         // цена = старт + путь от старта до этого узла [k,v]
         let newValue = this.costMap.get(minKey) + v;
         if (newValue < this.costMap.get(k)) {
          this.costMap.set(k, newValue)
         } 
        }
        // найти вершину более короткую вершину от текущей
      }
      
      currentNode = minKey;
      currentPath = this.nodeMap.get(minKey);

      temp--;
    }
    // обход графа и обновление стоимости каждой вершины
  }
}

const edges: Array<[string, string, number]> = [
  ["S", "A", 6],
  ["S", "B", 2],
  ["A", "F", 1],
  ["B", "A", 3],
  ["B", "F", 5],
];
const g = new WeightedGraph(edges);

console.log(g.shortestPath("S", "F"));
