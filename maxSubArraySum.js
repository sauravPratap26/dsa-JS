const maxSubArraySum = (arr = []) => {
  if (arr.length === 0) return 0;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(currentSum, maxSum);
    }
  }
  return maxSum 
};
