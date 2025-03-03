// constructor

function MyAngel() {
  this.mao = "mao mao";

  if (!new.target) throw new Error("Abe sale ");
}

let obj = new MyAngel();

try {
  console.log(MyAngel());
} catch (err) {
  console.log("Error message ===> ", err.message);
}

// 4. Reflect API (Meta - programming operator)

let user = { name: "irfan" };

let prop = Reflect.get(user, "name");
console.log(prop);

console.log(user?.nam);

let deepcpy = structuredClone(obj);

console.log("Deep cpy = ", deepcpy);

let obj2 = { name: "Irfan" };
let weakRef = new WeakRef(obj2); // Weak reference

console.log("check ==> ", weakRef.deref()); // Might be `{ name: "Irfan" }` or `undefined`
obj2 = null; // No strong reference anymore

console.log("check ==> ", weakRef.deref()); // Might be `{ name: "Irfan" }` or `undefined`
