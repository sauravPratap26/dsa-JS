function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const p = partition(arr, low, high);
    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);
  }
  return arr;
}
function partition(arr, low, high) {
  const pivotIndex = medianOfThreeIndex(arr, low, high);
  const pivot = arr[pivotIndex];
  [arr[low], arr[pivotIndex]] = [arr[pivotIndex], arr[low]];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function medianOfThreeIndex(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  const a = arr[low],
    b = arr[mid],
    c = arr[high];
  if (a > b !== a > c) return low;
  if (b > a !== b > c) return mid;
  return high;
}
const arr = [9, 8, 7, 6, 1, 2, 4, 5, 3, 0, 11, 12];
console.log(quickSort(arr.slice()));
