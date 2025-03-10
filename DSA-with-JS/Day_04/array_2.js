let arr = [92, 2, 8, 4, 7, 91, 10, 500];

let mem1 = null;
let mem2 = null;
let temp = null;

function prtrotiize(num) {


  for (let i = 1; i < arr.length - 1; i++) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}

prtrotiize(7);

console.log(arr);
