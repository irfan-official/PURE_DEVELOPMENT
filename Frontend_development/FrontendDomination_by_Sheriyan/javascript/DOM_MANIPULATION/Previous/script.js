

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let cross = document.querySelector(".cross");
function printValue() {
  console.log(this);
  console.log("Your name is === ", input.value);
  ul.innerHTML =
    ul.innerHTML +
    `<li>
        ${input.value} <button onclick="crossIT(this)" class="cross">X</button>
      </li>`;
}
function crossIT(button) {
  console.log("check it", button);
  button.parentElement.remove();
}
h1.style.color = "green";

console.log(h1);
