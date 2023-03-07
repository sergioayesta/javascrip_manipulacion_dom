const h1 = document.querySelector("h1");
const p = document.querySelector("p");
//const parrafito = document.querySelector(".parrafito");
const parrafito = document.getElementsByClassName("parrafito");
//const pid = document.querySelector("#pid");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.log(input.value);

//h1.innerHTML = "Nuevo título editado a través de JavaScript <BR> Lo máximo!!";
//h1.innerText = "Nuevo título editado a través de JavaScript <BR> Lo máximo!!";

//console.log(h1.getAttribute("pantalla"));
//h1.setAttribute("pantalla","rojo");
//console.log(h1.getAttribute("pantalla"))

h1.classList.add("NuevaClase");
h1.classList.remove("NuevaClase");
//h1.classList.toggle();
//h1.classList.contains();

input.value = "12345678";

const img = document.createElement("img");
img.setAttribute("src","https://cdn.shopify.com/s/files/1/0266/8534/1738/products/0374010500WEB1_700x700.png?v=1597980022");
console.log(img);

//pid.append(img);
pid.innerHTML = "";
pid.appendChild(img);