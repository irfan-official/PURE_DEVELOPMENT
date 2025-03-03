import { type } from "os";
import readline from "readline";

// Range based question

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Enter your Units? ", (num) => {
  let total_unit = Number(num);

  if (isNaN(total_unit)) {
    console.log("valid input is required");
    rl.close();
    return;
  }

  let price = 0;
  let rem_unit = 0;

  function test(unit) {
    if (unit === 0) {
      return 0;
    }
    if (unit <= 100) {
      // console.log("currenty unit 1 = ", unit);
      rem_unit = unit - unit;
      price += unit * 4.2;
      // console.log(`rem unit is = ${rem_unit} && price = ${price}`);
      return 0;
    } else if (unit >= 101 && unit <= 200) {
      // console.log("currenty unit 2 = ", unit);

      rem_unit = unit - 100;
      price += rem_unit * 6;

      // console.log(`rem unit is = ${rem_unit} && price = ${price}`);

      test(unit - rem_unit);
      return 0;
    } else if (unit >= 201 && unit <= 400) {
      // console.log("currenty unit 3 = ", unit);

      rem_unit = unit - 200;
      price += rem_unit * 8;
      test(unit - rem_unit);
      return 0;
    } else if (unit > 400) {
      // console.log("currenty unit 3 = ", unit);

      rem_unit = unit - 400;
      price += rem_unit * 13;
      test(unit - rem_unit);
      return 0;
    }
  }

  test(total_unit);

  console.log(`Payble anount is ${Math.floor(price)}`);
  rl.close();
});

// alternative solution

// if (unit > 400) {
//   price = (unit - 400) * 6;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   price += (unit - 200) * 8;
//   unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//   price += (unit - 100) * 6;
//   unit = 100;
// }

// price += unit*4.2
 