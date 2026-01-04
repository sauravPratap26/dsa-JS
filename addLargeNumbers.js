const addLargeNumbers = (num1, num2) => {
  const intNum1 = Number(num1);
  const intNum2 = Number(num2);

  return String(intNum1 + intNum2);
};

const addLargeNumbersCalculation = (num1, num2) => {
  const maxLen = Math.max(num1.length, num2.length);

  const intNum1 = num1.padStart(maxLen, "0").split("");
  const intNum2 = num2.padStart(maxLen, "0").split("");
  let carry = 0;
  let final = "";

  for (let i = maxLen - 1; i >= 0; i--) {
    const num1Last = intNum1[i];
    const num2Last = intNum2[i];

    const sum = Number(num1Last) + Number(num2Last) + carry;
    const sumLastDigit = String(sum % 10);
    carry = Math.floor(sum / 10);

    final = sumLastDigit + final;
  }
  if (carry !== 0) {
    final = carry + final;
  }
  return final;
};

console.log(addLargeNumbers("456", "77"));
console.log("** ", addLargeNumbersCalculation("0", "77"));
