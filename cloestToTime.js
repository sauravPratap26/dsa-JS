const minOperationsToAdjustTime = (initialTime, targetTime) => {
  const toMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const start = toMinutes(initialTime);
  const end = toMinutes(targetTime);

  let diff = (end - start + 1440) % 1440;

  let steps = 0;
  const ops = [60, 15, 5, 1];

  for (const op of ops) {
    const count = Math.floor(diff / op);
    steps += count;
    diff -= count * op;
  }

  return steps;
};

console.log(minOperationsToAdjustTime("02:30", "04:35")); //3
console.log(minOperationsToAdjustTime("23:55", "00:05")); // 2
