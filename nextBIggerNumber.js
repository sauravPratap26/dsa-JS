function nextBiggerNumber(n) {
  const digits = String(n).split('').map(Number);
  const len = digits.length;
  let i = len - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i < 0) return -1;
  let j = len - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];
  const right = digits.splice(i + 1).sort((a, b) => a - b);
  const result = Number(digits.concat(right).join(''));
  return result <= 2 ** 31 - 1 ? result : -1;
}
