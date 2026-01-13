function isSingleSegment(s) {
  let seenZero = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      seenZero = true;
    }
    if (s[i] == "1" && seenZero) {
      return false;
    }
  }
  return true;
}

//NOTE: there shall be no leading zeroes
console.log(isSingleSegment("101"));
