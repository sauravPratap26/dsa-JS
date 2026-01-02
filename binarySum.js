//Given two binary strings `a` and `b`, return their sum as a binary string.
const binarySum = (binaryA, binaryB) => {
  let finalSum = "";
  let carryForward = "0";
  const longestBinaryString = Math.max(binaryA.length, binaryB.length);
  if (longestBinaryString > binaryA.length) {
    const extra = longestBinaryString - binaryA.length;
    binaryA = Array(extra).fill(0).join("") + binaryA;
  } else if (longestBinaryString > binaryB.length) {
    const extra = longestBinaryString - binaryB.length;
    binaryB = Array(extra).fill(0).join("") + binaryB;
  }
  for (let i = binaryA.length - 1; i >= 0; i--) {
    const lastDigitA = binaryA[i];
    const lastDigitB = binaryB[i];

    switch (carryForward) {
      case "1": {
        if (lastDigitA === "1" && lastDigitB === "1") {
          finalSum = "1" + finalSum;
          carryForward = "1";
        } else if (lastDigitA === "1" || lastDigitB === "1") {
          finalSum = "0" + finalSum;
          carryForward = "1";
        } else {
          finalSum = "1" + finalSum;
          carryForward = "0";
        }
        break;
      }

      case "0": {
        if (lastDigitA === "1" && lastDigitB === "1") {
          finalSum = "0" + finalSum;
          carryForward = "1";
        } else if (lastDigitA === "1" || lastDigitB === "1") {
          finalSum = "1" + finalSum;
          carryForward = "0";
        } else {
          finalSum = "0" + finalSum;
          carryForward = "0";
        }
        break;
      }
    }
  }
  if (carryForward === "1") {
    finalSum = "1" + finalSum;
  }

  return finalSum;
};

console.log(binarySum("11", "1"));
console.log(binarySum("101", "11") )
