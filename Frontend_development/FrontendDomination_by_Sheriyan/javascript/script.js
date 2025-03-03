var a = { name: "a" };

var b = JSON.parse(JSON.stringify(a));

a["name"] = "Irfan";
console.log(b);
console.log(a);
