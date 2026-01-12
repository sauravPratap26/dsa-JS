function findErrorNums(nums) {
  const len = nums.length;
  const map = new Map();
  let result = [];
  const requiredSum = (len * (len + 1)) / 2;
  const currentSum = nums.reduce((acc, val) => acc + val, 0);
  for (const num of nums) {
    if ((map.get(num) || 0) >= 1) {
      result[0] = num;
      break;
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  result[1] = requiredSum - (currentSum - result[0]);
  return result;
}

console.log(findErrorNums([1, 2, 2, 4]));
