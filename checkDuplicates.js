const containsDuplicate = (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else map.set(nums[i], true);
  }
  return false;
};
console.log(containsDuplicate([-1000000000,1000000000]));
