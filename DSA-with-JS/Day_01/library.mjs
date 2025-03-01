let obj = {
  message: "Hello",
};
obj.__proto__.name = [
  "Irfan",
  "Naira",
  "Nusaiba",
  "jack",
  "John",
  "Bob",
  "Alice",
  "Natasha",
  "Kabir",
  "Herotashi",
];
obj.__proto__.randomName = function () {
  let index = Math.floor(Math.random() * 10);
  return this.name[index];
};

// console.log(obj.randomName());

export default obj;
