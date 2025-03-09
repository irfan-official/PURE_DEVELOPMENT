// claculate the word frequency

let word = "I   am a disko dancer";

let arr = [...word].filter((value) => value !== " ");

console.log("a =", arr);

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map);
let resKey = [map.keys()];
let resVal = [map.values()];
console.log(resKey, resVal);
