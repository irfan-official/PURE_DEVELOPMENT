// if (true) {
//   // if(<truthy value>){}
//   console.log(`First output is ${0 ?? "hello"}`);
//   console.log(`Second output is ${0 || "hello"}`);
// }

// function one(test) {
//   return () => console.log(`your result is ${test}`);
// }

// let res = one("Irfan");

// res();

// console.log(Math.random());

// console.log(Math.round(10.3));

// console.log(Math.floor());

// let input = Number("lol");

// console.log(isNaN(input));

// console.log(typeof NaN);

let asking_price = Number("7002");

if (isNaN(asking_price)) {
  console.log("valid input is required");
  return;
}

switch (true) {
  case asking_price < 0:
    console.log("Enter valid range");
    break;
  case asking_price <= 5000:
    console.log(`Under ${asking_price} -> discount 0%`);
    console.log(`Payble anount is ${asking_price}`);
    break;
  case asking_price >= 5001 && asking_price <= 7000:
    console.log(`Under ${asking_price} -> discount 5%`);
    console.log(
      `Payble anount is ${Math.floor(asking_price - asking_price * 0.05)}`
    );
    break;
  case asking_price >= 7001 && asking_price <= 9000:
    console.log(`Under ${asking_price} -> discount 10%`);
    console.log(
      `Payble anount is ${Math.floor(asking_price - asking_price * 0.1)}`
    );
    break;
  case asking_price > 9000:
    console.log(`Under ${asking_price} -> discount 20%`);
    console.log(
      `Payble anount is ${Math.floor(asking_price - asking_price * 0.2)}`
    );
    break;
}

let obj = { "my name": "Irfan", _: "mao", 1: "kao", name: "Hoitesh" };

let fname = "check";

with (obj) {
  console.log(_);
  console.log(name);
  console.log(1);
  console.log("my name");
  fname = name;
}

console.log(fname);

console.log("_" in obj);

console.log(undefined === void 0);
