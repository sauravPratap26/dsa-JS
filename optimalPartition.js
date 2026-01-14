function minPartitions(s) {
  let countSub = 0;
  let sub = "";
  for (let i = 0; i < s.length; i++) {
    if (!sub.includes(s[i])) {
      sub += s[i];
    } else {
      countSub++;
      sub = s[i];
    }
  }
  if (sub != "") {
    countSub++;
  }
  return countSub;
}

function optimisedMinPartition(s) {
  let countSub = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      countSub++;
      set.clear();
    }
    set.add(s[i]);
  }
  return countSub + 1;
}
console.log(minPartitions("abacaba"));
