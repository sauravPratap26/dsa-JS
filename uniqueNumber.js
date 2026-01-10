function findUniqueNumber(nums) {
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, false);
      continue;
    } else {
      map.set(num, true);
    }
  }
  for (const [key, value] of map) {
    if (value) return key;
  }
}

function optimisedFindUniqueNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(findUniqueNumber([3, 3, -3]));
console.log(optimisedFindUniqueNumber([3, 3, -3]));

