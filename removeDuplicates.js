function removeDuplicates(nums) {
  const existingElement = new Map();
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    if (existingElement.has(nums[i])) {
      continue;
    } else {
      unique++;
      existingElement.set(nums[i], true);
    }
  }
  return unique;
}

function optimisedRemoveDuplicates(nums) {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      unique++;
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(optimisedRemoveDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
