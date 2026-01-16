function longestWiggle(nums) {
  let count = 1;
  let prevDiff = 0;

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((currDiff > 0 && prevDiff <= 0) || (currDiff < 0 && prevDiff >= 0)) {
      count++;
      prevDiff = currDiff;
    }
  }
  return count;
}
