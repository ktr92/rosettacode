function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  

  const last1 = nums1[len1 - 1];
  const last2 = nums1[len1 - 1];
  const first1 = nums1[0] as number;
  const first2 = nums2[0] as number;

  let median = 0;

  let arr1 = nums1;
  let arr2 = nums2;

  const getMiddle = (arr: number[]) => {
    if (arr.length % 2 === 0) {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
     return arr[arr.length % 2]
    }
  }

  if (first1 > first2) {
   arr1 = nums2
   arr2 = nums1
  }

  if (!len1) {
   if (arr2.length < 2) {
    return arr2[0]
   }
   return getMiddle(arr2)
  }
  if (!len2) {
    if (arr1.length < 2) {
    return arr1[0]
   }
   return getMiddle(arr1)
  }

  if (last1 <= first2) {
    median = (last1 + first2) / 2;
  } else {
    let i = len1 - 1;
    while (arr1[i] > arr2[0]) {
      i--;
    }
    if ((len1 + len2) % 2 === 0) {
      median = (arr1[i] + arr2[0]) / 2;
    } else {
      median = arr2[0]
    }
  }

  return median;
}

module.exports = findMedianSortedArrays;
