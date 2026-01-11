const printNumber = (count) => {
  if (count == 0) return;
  console.log(count);
  count--;
  printNumber(count);
};

const printIncreasingNumber = (start, end) => {
  if (start > end) return;
  console.log(start);
  start++;
  printIncreasingNumber(start, end);
};

const printDecreaseNumber = (start, end) => {
  if (start > end) return;
  printDecreaseNumber(start + 1, end);
  console.log(start);
};
// printNumber(5);
// printIncreasingNumber(1, 6);
printDecreaseNumber(1,5)

