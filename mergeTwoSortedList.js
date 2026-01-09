const merge = (arr1, m, arr2, n) => {
  let i = m - 1;        
  let j = n - 1;  
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }

  return arr1;
};

console.log(merge([10, 12, 14, 0, 0, 0, 0], 3, [9, 11, 13, 15], 4));
