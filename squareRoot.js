const squareRoot = (num) => {
  if (num === 0 || num === 1) return num;
  const halfNum = ~~(num / 2);
  for (let i = 1; i <= halfNum; i++) {
    if (i * i < num) continue;
    else if (i * i === num) return i;
    else return i - 1;
  }
};

const optimisedSquareRoot = (num) => {
  if (num < 2) return num;

  let lowerBound = 1;
  let upperBound = Math.floor(num / 2);
  let ans = 0;

  while (lowerBound <= upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);

    if (mid * mid <= num) {
      ans = mid;
      lowerBound = mid + 1;
    } else {
      upperBound = mid - 1;
    }
  }

  return ans;
};

console.log(squareRoot(36));
console.log(optimisedSquareRoot(37));

