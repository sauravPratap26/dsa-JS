const printSumSub = (arr, sum, start = 0, temp = [], tempSum = 0) => {
  if (arr.length == start) {
    if (tempSum == sum) {
      console.log(temp);
    }
    return;
  }
  temp.push(arr[start]);
  tempSum += arr[start];
  printSumSub(arr, sum, start + 1, temp, tempSum);
  temp.pop();
  tempSum -= arr[start];
  printSumSub(arr, sum, start + 1, temp, tempSum);
};

printSumSub([1,2,3,4,5],5)
