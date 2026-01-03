const missingNumber = (nums) => {
  const maxNumber = nums.length;
  const totalSum = (maxNumber * (maxNumber + 1)) / 2;
  const currentSum = nums.reduce((acc, val) => {
    return acc + val;
  }, 0);
  if (currentSum == totalSum) return 0;
  return totalSum - currentSum;
};
