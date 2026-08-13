function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let first = [0, nums1.length - 1];
  let second = [0, nums2.length - 1];

  function getMid([start, end]: number[]) {
    if (start - end === 0) return 0;
    return start + Math.floor((end - start) / 2);
  }

  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }

  if (!nums1.length) {
    if (nums2.length < 2) return nums2[0];
    return getMid(nums2);
  }
  if (!nums2.length) {
    if (nums1.length < 2) return nums1[0];
    return getMid(nums1);
  }

  function getMedian(arr: number[], mid, [start, end]) {
    return (start - end + 1) % 2 === 0
      ? (arr[mid] + arr[mid + 1]) / 2
      : arr[mid];
  }

  let i = 0;
  let prev1 = 0;
  let prev2 = 0;
  let mid1 = getMid(first);
  let mid2 = getMid(second);
  let median1 = getMedian(nums1, mid1, first);
  let median2 = getMedian(nums2, mid2, second);

  function initMiddles(nums1, nums2, mid1, mid2, first, second) {
    mid1 = getMid(first);
    median1 = getMedian(nums1, mid1, first);

    mid2 = getMid(second);
    median2 = getMedian(nums2, mid2, second);
  }

  function hasTwo(pointer) {
    return Math.abs(pointer[1] - pointer[0]) === 1;
  }
  function hasMany(pointer) {
    return !hasOne(pointer) && !hasTwo(pointer);
  }
  function hasOne(pointer) {
    return pointer[1] - pointer[0] === 0;
  }

  do {
    prev1 = mid1;
    prev2 = mid2;
    if (median2 >= median1) {
      if (hasMany(first) && hasMany(second)) {
        first = [mid1 + 1, nums1.length - 1];
        second = [0, mid2];
      }
      if (hasTwo(second)) {
        if (hasTwo(first)) {
          first = [mid1 + 1, nums1.length - 1];
          second = [0, mid2];
        } else {
          second = [0, mid2];
        }
      }
    } else {
      if (hasMany(first) && hasMany(second)) {
        first = [prev1 + 1, mid1 > prev1 + 1 ? mid1 : prev1 + 1];
        second = [mid2, prev2 > mid2 ? prev2 : mid2];
      }
      if (hasTwo(first)) {
        if (hasTwo(second)) {
          first = [prev1 + 1, mid1 > prev1 + 1 ? mid1 : prev1 + 1];
          second = [mid2, prev2 > mid2 ? prev2 : mid2];
        } else {
          first = [prev1 + 1, mid1 > prev1 + 1 ? mid1 : prev1 + 1];
        }
      }
    }

    console.log(first, second);

    if (!hasOne(first)) {
      if (!hasOne(second)) {
        if (first[0] <= second[0]) {
          initMiddles(nums1, nums2, mid1, mid2, first, second);
        }
      } else {
        initMiddles(nums1, nums2, mid1, mid2, first, second);
        mid2 = 0;
        median2 = nums2[second[0]];
      }
    } else {
      initMiddles(nums1, nums2, mid1, mid2, first, second);
      mid1 = 0;
      median1 = nums1[first[1]];
    }
    i++;
  } while (hasTwo(first) && hasTwo(second));

  return (median2 + median1) / 2;
}

module.exports = findMedianSortedArrays;
