function combinationSum(arr, target, start = 0, current = [], result = []) {
  if (target === 0) {
    result.push([...current]);
    return;
  }

  if (start === arr.length) return;

  // Pick (only if valid)
  if (target >= arr[start]) {
    current.push(arr[start]);
    combinationSum(arr, target - arr[start], start, current, result);
    current.pop();
  }

  // Skip
  combinationSum(arr, target, start + 1, current, result);

  return result;
}
