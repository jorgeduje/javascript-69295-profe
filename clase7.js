// como recuperar elementos desde javascript
// obtener por id

// hago una peticion a la base de datos

let productos = [
  {
    title: "nike",
    price: 1560,
  },
];

let nodoTitle = document.getElementById("title");
nodoTitle.style.color = "red";

// obtener por clase
let nodoContainer = document.getElementsByClassName("container-h2");
nodoContainer[0].style.color = "blue";

// obtener por selector
// let botones = document.querySelector(".btn-saludar");
let botones = document.querySelectorAll(".btn-saludar");
console.log(botones);

nodoTitle.textContent = "hola";

//#container-products

let contenedorProductos = document.getElementById("container-products");

// contenedorProductos.innerHTML = `<div class="card">
//                                     <h2>${productos[0].title}</h2>
//                                     <h2>${productos[0].price}</h2>
//                                     <button>comprar</button>
//                                 </div>
//                                 `;

let todasLasTarjetas = "";
productos.forEach((producto) => {
  // si es par o impar
  todasLasTarjetas += `<div class="card">
    <h2>${producto.title}</h2>
    <h2>${producto.price}</h2>
    <button>comprar</button>
    </div>
    `;
});
contenedorProductos.innerHTML = todasLasTarjetas;

// boton que quiero que dispare una funcion
let botonQueSaluda = document.getElementById("btn-saludar");

// el evento que va estar a la escucha y la accion que va ejecutar cuando eso se escuche

// botonQueSaluda.addEventListener("mouseenter", () => {
//   nodoTitle.style.color = "green";
//   nodoTitle.textContent = "chau";
// });
// botonQueSaluda.addEventListener("mouseleave", () => {
//   nodoTitle.style.color = "blue";
//   nodoTitle.textContent = "chau";
// });
botonQueSaluda.addEventListener("mouseover", () => {
  nodoTitle.style.color = "blue";
  nodoTitle.textContent = "chau";
  console.log("se ejecuta");
});

let inputNombre = document.getElementById("input-nombre");

let nombre = "";
inputNombre.addEventListener("input", (e) => {
  nombre = e.target.value;
});

let botonNombrar = document.getElementById("nombrar");
botonNombrar.addEventListener("click", () => {
  nodoTitle.textContent = nombre;
});

let numeroUno = 0;
let inputUno = document.getElementById("primer-numero");
inputUno.addEventListener("input", (e) => {
  numeroUno = e.target.value;
});

let numeroDos = 0;
let inputDos = document.getElementById("segundo-numero");
inputDos.addEventListener("input", (e) => {
  numeroDos = e.target.value;
});

let botonSum = document.getElementById("sumar-numeros");
let nodoResultado = document.querySelector(".h3-resultado");
botonSum.addEventListener("click", () => {
  //   console.log(typeof numeroUno, numeroUno);

  //   console.log(typeof numeroDos, numeroDos);
  nodoResultado.textContent = `Resultado: ${
    Number(numeroUno) + Number(numeroDos)
  }`;
});

// sessionStorage.setItem("nombreUsuario", "pepe");

let nombreUsuario = sessionStorage.getItem("nombreUsuario");

console.log(nombreUsuario);
