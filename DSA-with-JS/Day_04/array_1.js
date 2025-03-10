let arr = [92, 2, 8, 4, 7, 91, 10, 500];

let max = arr[0];
let sMax = arr[1];

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i];
  }
}

console.log(`max = ${max} || sMax = ${sMax}`);
