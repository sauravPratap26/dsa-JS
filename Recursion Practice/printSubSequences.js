const sub = (nums, start = 0, curr = []) => {
  if (nums.length === start) {
    console.log(curr);
    return;
  }

  curr.push(nums[start]);
  sub(nums, start + 1, curr);

  curr.pop();
  sub(nums, start + 1, curr);
};

sub([1, 2, 3]);
