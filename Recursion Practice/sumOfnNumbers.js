function sum(n, initial) {
  if (n == 0) return initial;
  initial += n;
  return sum(n - 1, initial);
}

function sum1(start, end, final) {
  if (start > end) return final;
  final += start;
  return sum1(start + 1, end, final);
}

function sum3(n) {
  if (n == 0) return 0;
  return n + sum3(n - 1);
}
console.log(sum(5, 0));
console.log(sum1(1, 5, 0));
console.log(sum3(5))
