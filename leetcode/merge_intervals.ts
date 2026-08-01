function merge(intervals: number[][]): number[][] {
  const fillRange = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);

  const flat: number[] = [];

  const edgesMap = new Map();

  intervals.forEach((item: number[], index: number) => {
    edgesMap.set(item[0], {
      max: false,
      min: true,
    });
    edgesMap.set(item[1], {
      max: true,
      min: false,
    });
    flat.push(...fillRange(item[0] as number, item[1] as number));
  });
  const sorted: number[] = [...new Set(flat)].sort((a: number, b: number) =>
    a > b ? 1 : -1,
  );

  const merged: number[][] = [];
  let start: number = 0;
  console.log(sorted);
  console.log(edgesMap);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] && sorted[i + 1]) {
      const leftEdge = edgesMap.has(sorted[i]) ? edgesMap.get(sorted[i]).max : false;
      const rightEdge = edgesMap.has(sorted[i + 1]) ? edgesMap.get(sorted[i + 1]).min : false;
      const isEdge = leftEdge && rightEdge;
      const isSiblings = (sorted[i + 1] as number) - (sorted[i] as number) > 1;

      console.log(i, sorted[i], sorted[i + 1], isEdge, isSiblings);

      if (i < sorted.length - 1 && (isSiblings || isEdge)) {
        merged.push([sorted[start] as number, sorted[i] as number]);
        start = i + 1;
      }
    } else {
      if (sorted[i] !== sorted[start]) {
      merged.push([sorted[start] as number, sorted[i] as number]);

      }
    }
  }
  return merged;
}

const intervals = [[1,4],[0,0]]

console.log(merge(intervals)); // [[0,0],[1,4]]
