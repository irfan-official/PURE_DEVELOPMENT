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