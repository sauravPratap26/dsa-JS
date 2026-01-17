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

const countSumSub = (arr, sum, start = 0, tempSum = 0) => {
  if (arr.length == start) {
    if (tempSum == sum) {
      return 1;
    }
    return 0;
  }
  tempSum += arr[start];
  let withoutSkip = countSumSub(arr, sum, start + 1, tempSum);
  tempSum -= arr[start];
  let withSkip = countSumSub(arr, sum, start + 1, tempSum);
  return withSkip + withoutSkip;
};
printSumSub([1, 2, 3, 4, 5], 5);
// printOneSumSub([1, 2, 3, 4, 5], 5);
let count = countSumSub([1, 2, 3, 4, 5], 5);
console.log(count);
