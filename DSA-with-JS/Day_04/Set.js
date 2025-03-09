let s = new Set(); // store unique vaule like set in Python

/*
set.add()
set.delete()
set.has()
set.clear()
set.size
*/

// 1. Adding value with add method
s.add("mao");
s.add(1);

// 2. delete value with delete method
console.log(s);

console.log(s.delete(1)); // if the value delete then return true else false

console.log(s);

// 3. check a value with has method

console.log(s.has(2)); // return in Boolean, true if the value presence else false

// 4. clear all the Set value with clear method

console.log(s.clear()); // return undefined

console.log(s);

// 5. check the Set size with size property

console.log(s.size);

// 6. Access the set (set doesnot support index based access like array object )
// set can be iterable

let arr = [...s];
console.log(arr);

// also map is applicable
s.forEach((item, index) => {
  console.log(`index = ${index} || item = ${item}`);
});

for (let value of s) {
  console.log(value);
}
