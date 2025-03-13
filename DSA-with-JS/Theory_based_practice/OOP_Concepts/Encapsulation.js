// dont acces the package
// make a function thyat retun if peroson have enough package for mirrage

class Player {
  #age; // # is to make private proper
  #salary;
  #LPA;
  constructor(name, age, salary) {
    this.#age = age;
    this.name = name;
    this.#salary = salary;
    this.#LPA = salary * 12;
  }
  checkEliigibleForMirrage() {
    return this.#LPA >= 12_00_000
      ? true
      : {
          message: false,
          Needs: 12 * 1_00_000 - this.#salary * 12,
        };
  }
}

let irfan = new Player("Irfan", 25, 1_00_000);
console.log(irfan.checkEliigibleForMirrage());

console.log(irfan.age); // not accisible

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
