// Moves all zero at left side and all 1 at right side

let arr = [1, 1, 1, 1, 0, 0, 0, 0];

for (let i = 0, j = 0, lim = arr.length; i < lim; i++) {
  if (arr[i] === 0) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    j++;
  }
}

console.log(arr);
