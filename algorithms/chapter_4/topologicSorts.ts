/**
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3]. */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (!prerequisites.length)
    return Array(numCourses)
      .fill(0)
      .map((_, i) => i);

  const dependecies = new Map<number, Set<number>>();
  const result = [];

  for (let i = 0; i < numCourses; i++) {
    dependecies.set(i, new Set<number>());
  }

  for (const [k, v] of prerequisites) {
    dependecies.get(k!)!.add(v!);
  }

  do {
    let visited = null;
    for (const [keyMap, _] of dependecies) {
      if (dependecies.get(keyMap)?.size === 0) {
        // если нашли независимый, добавляем в результат
        visited = keyMap;
        result.push(keyMap);
        dependecies.delete(keyMap);
        break;
      }
    }
    if (visited === null) return [];

    // ищем его во всех зависимостях и удаляем т.к. он уже посещен
    for (const [key, value] of dependecies) {
      if (value.has(visited)) {
        value.delete(visited);
      }
    }
  } while (dependecies.size > 0);

  if (result.length < numCourses) return [];

  return result;
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
console.log(findOrder(1, []));
