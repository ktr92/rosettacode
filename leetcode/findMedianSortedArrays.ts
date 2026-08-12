function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
 
  let index = 0;
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  let targetindex = isEven ? totalLength / 2 - 1 : Math.floor(totalLength / 2);

  let k1 = 0;
  let k2 = 0;


  const getMiddle = (arr: number[]) => {
    if (arr.length % 2 === 0) {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  };

  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }

  if (!nums1.length) {
    if (nums2.length < 2) return nums2[0];
    return getMiddle(nums2);
  }
  if (!nums2.length) {
    if (nums1.length < 2) return nums1[0];
    return getMiddle(nums1);
  }
  let min = -Infinity;


  return min;
}

module.exports = findMedianSortedArrays;
