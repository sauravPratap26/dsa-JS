function pallindrome(str, start = 0) {
  const len = str.length;
  if (start >= Math.floor(len / 2)) return true;
  if (str[start] != str[len - start - 1]) return false;
  return pallindrome(str, start + 1);
}

console.log(pallindrome("sps"))