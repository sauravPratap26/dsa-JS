const twoSum = (nums, target) => {
  const numbersMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const valueNeeded = target - nums[i];
    if (numbersMap.has(valueNeeded)) return [numbersMap.get(valueNeeded), i];
    else {
      numbersMap.set(nums[i], i);
    }
  }
  return [];
};

const twoSumBrute = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
console.log(twoSum([2, 7, 0, 11, 15], 15));
console.log(twoSumBrute([2, 7, 0, 11, 15], 15));
