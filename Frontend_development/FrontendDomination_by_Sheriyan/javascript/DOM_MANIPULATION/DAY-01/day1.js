// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByTagName;

// document.querySelector(); // return The first matching element.
// document.querySelectorAll(); // return a NodeList (a collection of elements that is static, meaning it does not update dynamically).

let btn = document.querySelector("button");

btn.innerText = "mao mao";
btn.textContent = "ullala";

let h1 = document.querySelector("h1");

h1.innerText = "pao pao";

h1.innerHTML = "<i class='test'>pao pao</i>";
