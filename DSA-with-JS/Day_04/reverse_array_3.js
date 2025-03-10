let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (
  let i = 0, lim = Math.floor(arr.length / 2), back = arr.length - 1;
  i < lim;
  i++, back--
) {
  [arr[i], arr[back]] = [arr[back], arr[i]];
  //console.log("arr ==> ", arr);
}

console.log(arr);
