const minTime = (word) => {
  const lowerCaseWord = word.toLowerCase();
  let currentPos = 97;
  let startIndex = 0;
  let time = 0;
  if (lowerCaseWord[0] === "a") {
    time++;
    startIndex += 1;
  }
  for (let i = startIndex; i < lowerCaseWord.length; i++) {
    const targetPosition = lowerCaseWord[i].charCodeAt(0);

    if (
      (currentPos < 109 && targetPosition < 109) ||
      (currentPos > 109 && targetPosition > 109)
    ) {
      time += Math.abs(targetPosition - currentPos) + 1;
    } else {
      const time1 = Math.abs(currentPos - targetPosition) + 1;
      let time2 = 0;
      if (currentPos <= 109) {
        time2 = Math.abs(currentPos - 97 + 123 - targetPosition + 1);
      } else {
        time2 = Math.abs(123 - currentPos + targetPosition - 97 + 1);
      }
      time += Math.min(time1, time2);
    }
    currentPos = targetPosition;
  }
  return time;
};

const minTimeOptimised = (word) => {
  let time = 0;
  let current = 0;

  for (const ch of word.toLowerCase()) {
    const target = ch.charCodeAt(0) - 97;

    const diff = Math.abs(target - current);
    const rotate = Math.min(diff, 26 - diff);

    time += rotate + 1;
    current = target;
  }

  return time;
};

console.log(minTime("zjpc")); // 34

console.log(minTime("zjpc"));
