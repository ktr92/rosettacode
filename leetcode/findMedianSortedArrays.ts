function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  
  let index = 0;
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  let targetindex = isEven ? totalLength / 2 - 1 : Math.floor(totalLength / 2);

  let k1 = 0;
  let k2 = 0;
  let prev = null
  let median = 0;

  let first = [0, 0];
  let second = [0, 0];

  function getMid([start, end]) {
   return start + Math.floor((end - start) / 2);
  }

  while (start <= end) {
          
  }

  return median
}

module.exports = findMedianSortedArrays;
