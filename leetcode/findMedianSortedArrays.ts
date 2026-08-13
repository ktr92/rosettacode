function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let index = 0;
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  let targetindex = isEven ? totalLength / 2 - 1 : Math.floor(totalLength / 2);

  let k1 = 0;
  let k2 = 0;
  let prev = null;
  let median = 0;

  let first = [0, nums1.length - 1];
  let second = [0, nums2.length - 1];

  function getMid([start, end]: number[]) {
    return start + Math.floor((end - start) / 2);
  }

  function getMedian(arr: number[], mid, [start, end]) {
    return (start - end + 1) % 2 === 0 ? (arr[mid] + arr[mid + 1]) / 2 : arr[mid];
  }

  let i = 0;
  let prev1 = 0;
  let prev2 = 0;
  let mid1 = 0;
  let mid2 = 0;
  let median1 = 0;
  let median2 = 0;


  do {
    prev1 = mid1;
    prev2 = mid2;
    mid1 = getMid(first);
    mid2 = getMid(second);

    median1 = getMedian(nums1, mid1, first);
    median2 = getMedian(nums2, mid2, second);

    if (median2 >= median1) {
      first = [mid1 + 1, nums1.length - 1];
      second = [0, mid2];
    } else {
      first = [prev1, mid1 + 1];
      second = [mid2 + 1, prev2];
    }
    console.log(first, second);
    i++;
  } while (Math.abs(first[1] - first[0]) > 1 && Math.abs(second[1] - second[0]) > 1)
    
  return (median2 + median1) / 2;
}

module.exports = findMedianSortedArrays;
