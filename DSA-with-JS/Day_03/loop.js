// for loop
// for each
// map
// filter
// reduce
// for(/*start, end, change*/)

// for (;;) {
//   console.log("hello");
// }

function res(num) {
  return num.map((item, index) => item + 11)[0];
}

console.log(res([1, 2, 3]));
