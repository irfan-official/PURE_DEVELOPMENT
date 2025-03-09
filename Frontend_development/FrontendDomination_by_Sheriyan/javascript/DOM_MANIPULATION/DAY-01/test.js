class LRU {
  constructor(len) {
    this.arr = new Array(len);
  }
  get(key) {
    if (key > this.arr.length && key < 0) {
      return null;
    }

    let elem = this.arr.splice(key - 1, 1);
    this.arr.unshift(elem[0]);
    return this.arr[0];
  }
  put(key, value) {
    if (key > this.arr.length && key < 0) {
      return null;
    }
    this.arr[key - 1] = value;
  }
}

let stack = new LRU(3);

stack.put(1, "one");
stack.put(2, "two");
stack.put(3, "three");

console.log(stack.get(3));

console.log(stack);
