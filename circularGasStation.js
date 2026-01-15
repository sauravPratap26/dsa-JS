function gasolineAdventure(gas, cost) {
  let totalBalance = 0;
  let currentBalance = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    totalBalance += diff;
    currentBalance += diff;

    if (currentBalance < 0) {
      startIndex = i + 1;
      currentBalance = 0;
    }
  }

  return totalBalance >= 0 ? startIndex : -1;
}
