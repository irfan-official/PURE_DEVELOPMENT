
class One {
  constructor(monthlyincome = 20000) {
    this.income = monthlyincome;
  }
  calculate() {
    console.log(this.income * 12);
  }
}

class Two extends One {
  constructor(income) {
    super(income);
    super.calculate();
  }
}

let p1 = new One(20000);

let p2 = new Two();
