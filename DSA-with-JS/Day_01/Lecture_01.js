// typecortion -> JS engine operation according to operator

// console.log(typeof (1 - "1"));

// let age = Number(prompt("what is your age?"));

// console.log(age)

// Black color is for Strinng
// Blue color is for Number

// type casting is for converting one type to another type

// let str = "123";

// let num = Number(str);

// let str2 = String(num);
// console.log(num);

// swaping _________________________________________________

// let a = 10;
// let b = 20;
// let c;

// // method 1
// c = a;
// a = b;
// b = c;

// // method 2
// a = a + b; // 10 + 20 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// method 3
// [a, b] = [b, a];

let a = 4567;

let num = (a % 10) * 10 ** (String(a).length - 1);
console.log(num);
console.log(a % 10); // // Extract last degit
console.log(Math.floor(a / 10)); // get number without last degit

// Arithmetic operator + - * % /
// Relational operator > < >= <= !=
// Logical operator && || !
// Unary operator ++ --
// trinary operator (condition) ? statement_1 : statement_2;

// let i = 11;
// i = i++ + ++i;
// console.log(i);

// Math methods return value
// Math.round(10.3) // 10  // consider >= .5 
// Math.ceil(10.1) // 11  // consider all time upper value
// Math.floor(10.9) // 10 // consider all time lowest value
// Math.truc(18.98) // 18 // remove the after points portion
// Math.pow(2,5) // 2^5 // 2**5
// Math.sqrt(25) // 5
// Math.cbrt(9)
// Math.abs(-15) // 15 |-> modulus of -15

// Math.max(78, 43, 33) // 78 // return the maximum value
// let nums = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(...nums));

// Math.min(78, 43, 33) // 33 // return the min value
// Math.random() // return any random float number between 0 to 1
// variable.toFixed(num) // return variable with num fixed float digit

let yy = 10.5555;
console.log(yy.toFixed(1))



