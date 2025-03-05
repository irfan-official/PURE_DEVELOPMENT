var largestNumber = function (nums) {
  let arr_over_9 = [];
  let arr_under_9 = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      arr_under_9.push(String(nums[i]));
    } else {
      arr_over_9.push(String(nums[i]));
    }
  }
  arr_over_9.sort((a, b) => b - a);
  arr_under_9.sort((a, b) => b - a);

  console.log(arr_over_9);
  console.log(arr_under_9);

  let count1 = 0;
  let count2 = 0;

  if(arr_over_9[++count1] > arr_under_9[++count2])
};

let nums = [3, 30, 34, 5, 9];

console.log(largestNumber(nums));
