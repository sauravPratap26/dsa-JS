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

const printOneSumSub = (arr, sum, start = 0, temp = [], tempSum = 0) => {
  if (arr.length == start) {
    if (tempSum == sum) {
      console.log(temp);
      return true;
    }
    return false;
  }
  temp.push(arr[start]);
  tempSum += arr[start];
  if (printOneSumSub(arr, sum, start + 1, temp, tempSum)) {
    return true;
  } else {
    temp.pop();
    tempSum -= arr[start];
    return printOneSumSub(arr, sum, start + 1, temp, tempSum);
  }
};

printSumSub([1, 2, 3, 4, 5], 5);
printOneSumSub([1, 2, 3, 4, 5], 5);

