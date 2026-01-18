const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
};

const mergeSortedArrays = (left = [], right = []) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j]);
      j++;
    } else {
      result.push(left[i]);
      i++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const arr = [1, 2, 8, 9, 6, 4, 7, 5, 0];
console.log(mergeSort(arr));
