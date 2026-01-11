const reverse = (arr, start = 0) => {
  const len = arr.length;

  if (start >=Math.floor(len / 2)) return arr;

  const end = len - start - 1;
  [arr[start], arr[end]] = [arr[end], arr[start]];

  return reverse(arr, start + 1);
};

console.log(reverse([1, 2, 4, 5]));
