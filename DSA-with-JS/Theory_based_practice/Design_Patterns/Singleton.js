let obj1 = {
  name: "Irfan",
  email: "hello@irfans.dev",
};

let obj2 = obj1;
let obj3 = obj1;

function one() {
  console.log("one functiuon is called");
}

one.messagge = "mao";

console.log(one.messagge);
