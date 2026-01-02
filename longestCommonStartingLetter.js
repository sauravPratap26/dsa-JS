// Finding the Longest Common Starting Letters i.e. the longest prefix
const longestCommon = (strArray) => {
  const firstString = strArray[0];
  let alphaCount = 0;
  let longestString = "";
  for (const alpha of firstString) {
    for (let i = 1; i < strArray.length; i++) {
      if (alpha != strArray[i][alphaCount]) return longestString;
    }
    longestString += alpha;
    alphaCount++;
  }
  return longestString;
};
console.log(longestCommon(["saurav", "sauce", "saura","pra"]));
