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

class CPY extends Player {
  constructor(name, age) {
    super(name, age);
    this.show = [name, age];
  }
  get() {
    return;
  }
}

let cheats = new CPY();
console.log(cheats.show);
