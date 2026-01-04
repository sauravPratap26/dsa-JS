const maximumNumber69 = (nums) => {
  const arrayNumber = String(nums).split("");
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === "6") {
      arrayNumber[i] = "9";
      break;
    }
    continue;
  }
  return Number(arrayNumber.join(""));
};

console.log(maximumNumber69(9669));
