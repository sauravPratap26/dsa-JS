const minimumOperations = (nums) => {
  let operations = 0;
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i + 1] <= nums[i]) {
      const howMuchLess = nums[i] - nums[i + 1] + 1;
      operations += howMuchLess;
      nums[i + 1] = nums[i] + 1;
    }
    i++;
  }
  return operations;
};

console.log(minimumOperations([2, 2, 2]));
