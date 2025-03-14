// INR demonition
// Count the total Notes

// Example
// 4888 - 500 = 9
// 388 - 200 = 1
// 188 - 100 = 1
// 88 - 50 = 1
// 38 - 20 = 1
// 18 - 10 = 1
// 8 - 5 = 1
// 3 - 2 = 1
// 1 - 1 = 1

let Notes = {
  "Total Notes": 0,
};

// optional; method but it is too big
// if (input >= 500) {
//   let res = Math.floor(input / 500);
//   Notes[500] = res;
//   input = input - 500 * res;
// }
// if (input >= 200) {
//   let res = Math.floor(input / 200);
//   Notes[200] = res;
//   input = input - 200 * res;
// }
// if (input >= 100) {
//   let res = Math.floor(input / 100);
//   Notes[100] = res;
//   input = input - 100 * res;
// }
// if (input >= 50) {
//   let res = Math.floor(input / 50);
//   Notes[50] = res;
//   input = input - 50 * res;
// }
// if (input >= 20) {
//   let res = Math.floor(input / 20);
//   Notes[20] = res;
//   input = input - 20 * res;
// }
// if (input >= 10) {
//   let res = Math.floor(input / 10);
//   Notes[10] = res;
//   input = input - 10 * res;
// }
// if (input >= 5) {
//   let res = Math.floor(input / 5);
//   Notes[5] = res;
//   input = input - 24 * res;
// }
// if (input >= 2) {
//   let res = Math.floor(input / 2);
//   Notes[2] = res;
//   input = input - 2 * res;
// }
// if (input >= 1) {
//   let res = Math.floor(input / 1);
//   Notes[1] = res;
//   input = input - 1 * res;
// }
// console.log(Notes);

let notes_array = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let count = -1;
let notes_array_length = notes_array.length;

function req(input) {
  if (count === notes_array_length) {
    return 0;
  }
  count++;
  if (input >= notes_array[count]) {
    let note_count = Math.floor(input / notes_array[count]);
    Notes[notes_array[count]] = note_count;
    Notes["Total Notes"] += note_count;
    req(input % notes_array[count]);
  } else {
    req(input);
  }
  return 0;
}
req(5001);
console.log(Notes);

// || Logical OR Operator // work on truthy value
// ?? Nullish Coalescing Operator // Work on !null and !undefined
// ?. Optional chaining Operator // Work on truthy chaining

// let test = 0;

// let res = test ?? 111;

// console.log(test ?? 111);
// console.log(test > 0 ? "First cell is running" : "Second cell is running");

// console.log("First cell is running" || "Second cell is running");

// swap a value using one line

// let a = 1;
// let b = 67;

// b = a + b - (a = b);
// console.log("a = ", a);
// console.log("b = ", b);
