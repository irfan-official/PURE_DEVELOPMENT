// Hash map concept // collision is not possible
// store a single value for single key

let map = new Map();

/*
1. set.set(key, value)
2. set.get(key)
3. set.delete()
4. set.has()
5. set.size
*/

// 1. set the value in map using set method

map.set(true, "irfan is the boss");
map.set(true, "__2465__");

map.set(false, "irfan the DSA king");

console.log(map);

// 2. Accessing the Values using get method

console.log(map.get(true));

// 3. Checking a key with has method

console.log(map.has(true)); // return Boolean

// 4. Deleting a key with delete method

console.log(map.delete());

// 5. check the Map size with size property

console.log(map.size);
