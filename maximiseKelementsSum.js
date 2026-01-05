const maximisKElementSum = (nums, k) => {
  let sum = 0;
  while (k > 0) {
    const largestNumber = Math.max(...nums);
    const largestNumberIndex = nums.findIndex(
      (value) => value === largestNumber
    );
    sum += largestNumber;
    nums[largestNumberIndex] = largestNumber + 1;
    k--;
  }
  return sum;
};

const maximisKElementSumAP = (nums, k) => {
  const largestNumber = Math.max(...nums);
  //ap = (k/2) * (2* num + (k-1))
  return (k / 2) * (2 * largestNumber + (k - 1));
};
console.log(maximisKElementSum([1, 2, 3, 4, 5], 3));
console.log(maximisKElementSumAP([1, 2, 3, 4, 5], 3));
