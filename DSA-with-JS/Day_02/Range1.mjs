import { type } from "os";
import readline from "readline";

// Range based question

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Enter your Bill? ", (num) => {
  let asking_price = Number(num);

  if (isNaN(asking_price)) {
    console.log("valid input is required");
    rl.close();
    return;
  }
  let def = 0;
  switch (true) {
    case asking_price < 0:
      console.log("Enter valid range");
      rl.close();
      break;
    case asking_price <= 5000:
      def = 0;
      break;
    case asking_price >= 5001 && asking_price <= 7000:
      def = 0.05;
      break;
    case asking_price >= 7001 && asking_price <= 9000:
      def = 0.1;
      break;
    case asking_price > 9000:
      def = 0.2;
      break;
  }
  console.log(
    `Payble anount is ${Math.floor(asking_price - asking_price * def)}`
  );
  rl.close();
});
