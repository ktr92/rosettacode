function merge(intervals: number[][]): number[][] {
  const merged: number[][] = []
  const sorted: number[][] = intervals.sort((a: number[], b: number[]) => a[0] > b[0] ? 1 : -1)
/*   console.log(sorted)
 */
  const egdeMap = new Map();
  const size = sorted.length;

  let start = sorted[0] ? sorted[0][0] as number : 0;
  let end = sorted[size - 1] ? (sorted[size - 1]  as number[])[0] as number : 0;

  const flat = sorted.flat()
  console.log('\nflat: ', flat)


  const added: number[] = []

  for (let i = 0; i < flat.length; i++) {  
    let parity = i % 2 === 0 ? 'even' : 'odd'  

    const isLast = !flat[i + 1];
    const isFirst = !flat[i - 1];
    const isInside = !isFirst && !isLast && flat[i + 2];
    const isMerge = flat[i] > flat[i + 1] && flat[i] < flat[i + 2];

    if (isInside) {
      if (isMerge && parity === 'odd') {
         merged.push([flat[i - 1], flat[i + 2]]);
      }
      else {
        if (parity === 'even' && flat[i] < flat[i + 1]) {
          merged.push([flat[i], flat[i + 1]])
        }
        
      }
    } else {
      if (isLast) {
        merged.push([flat[i-1], flat[i]])
      }
      
      if (flat[i] === flat[i+1] && parity === 'even') {
        merged.push([flat[i], flat[i + 1]])
      } 
    }


  }
  /* for (let i = start; i < end; i++) {  
    if (egdeMap.has(i)) {

    }
  } */

  return merged;
}

const intervals1 = [[1,4],[0,0]]
const intervals2 = [[1,3],[2,6],[8,10],[15,18]]
const intervals3 = [[1,4],[4,5]]
const intervals4 = [[4,7],[1,4]]


console.log('merge: ', merge(intervals1)); // [[0,0],[1,4]]
console.log('merge: ', merge(intervals2)); // [[1,6],[8,10],[15,18]]
console.log('merge: ', merge(intervals3)); // [[1,5]]
console.log('merge: ', merge(intervals4)); // [[1,7]]
