// string o array
let nombre = "pepe";

console.log(nombre.toUpperCase());
console.log(nombre.indexOf("z"));
console.log(nombre.lastIndexOf("e"));

// para saber si un email es valido tiene que tener arroba  @

const verificarEmail = (email) => {
  // let esValido = email.includes("@");
  let esValido = email.indexOf("@") !== -1;
  console.log(esValido);
};
verificarEmail("pepegmail.com");
verificarEmail("pepegmail.com.ar");
verificarEmail("pepe@gmail.com.ar");

let palabras = ["casa", "avion", "hormiga", "pepe"];

console.log(palabras.includes("avion"));

palabras.pop(); // devuelve lo que elimino

let numeros = [1, 2, 3];

let arrayInvertido = []; // [ 3, 2, 1 ]
arrayInvertido.push(numeros.pop());
arrayInvertido.push(numeros.pop());
arrayInvertido.push(numeros.pop());

console.log(arrayInvertido);

// metodos avanzados ---> reciben como argumento una funcion
// Callback --> una funcion que se pasa como argumento a otra funcion
// const sumar = ( x )=>{

// }

// sumar( ()=>{} ) // --> callback

//

let palabrasDos = ["casa", "avion", "hormiga", "pepe"];

let palabrasDosMayusculas = [];

palabrasDos.forEach((palabra, indice) => {
  // palabrasDosMayusculas.push(palabra.toUpperCase());
  console.log(palabra);
  console.log(indice);
});

const productos = [
  {
    nombre: "Laptop HP",
    precio: 799.99,
    categoria: "Electrónica",
    stock: 15,
    descuento: 10,
    caracteristicas: ["8GB RAM", "256GB SSD", "15 pulgadas"],
    disponible: true,
  },
  {
    nombre: "Smartphone Samsung",
    precio: 499.99,
    categoria: "Electrónica",
    stock: 25,
    descuento: 5,
    caracteristicas: ["6GB RAM", "128GB", "Cámara 48MP"],
    disponible: true,
  },
  {
    nombre: "Zapatillas Nike",
    precio: 89.99,
    categoria: "Ropa",
    stock: 30,
    descuento: 0,
    caracteristicas: ["Talla 42", "Running", "Color negro"],
    disponible: true,
  },
  {
    nombre: "Libro JavaScript Avanzado",
    precio: 35.5,
    categoria: "Libros",
    stock: 50,
    descuento: 15,
    caracteristicas: ["400 páginas", "Tapa blanda", "Edición 2023"],
    disponible: true,
  },
  {
    nombre: "Monitor LG UltraWide",
    precio: 349.99,
    categoria: "Electrónica",
    stock: 10,
    descuento: 8,
    caracteristicas: ["29 pulgadas", "IPS", "HDR10"],
    disponible: false,
  },
  {
    nombre: "Cafetera Automática",
    precio: 129.95,
    categoria: "Hogar",
    stock: 18,
    descuento: 0,
    caracteristicas: ["Programable", "1.5L", "Filtro lavable"],
    disponible: true,
  },
  {
    nombre: "Teclado Mecánico Gaming",
    precio: 79.99,
    categoria: "Accesorios",
    stock: 0,
    descuento: 20,
    caracteristicas: ["RGB", "Switches Blue", "Layout español"],
    disponible: false,
  },
  {
    nombre: "Auriculares Bluetooth",
    precio: 59.99,
    categoria: "Accesorios",
    stock: 22,
    descuento: 5,
    caracteristicas: ["20h batería", "Cancelación de ruido", "Plegables"],
    disponible: true,
  },
  {
    nombre: "SSD 1TB",
    precio: 109.95,
    categoria: "Componentes",
    stock: 8,
    descuento: 0,
    caracteristicas: ["1TB", "NVMe", "Lectura 3500MB/s"],
    disponible: true,
  },
  {
    nombre: "Mesa de Escritorio",
    precio: 149.99,
    categoria: "Muebles",
    stock: 5,
    descuento: 12,
    caracteristicas: ["Madera", "120x60cm", "Con cajones"],
    disponible: true,
  },
];

// quiero ver por consola los nombres de todos los productos y separados por
//  -------

// permite recorrer un array y ejecutar una instruccion en cada vuelta
// no devuelve nada
// no tengo que retornar nada en cada vuelta
productos.forEach((producto, i) => {
  console.log(producto.nombre);
  console.log(`estamos recorriendo el elemento de la posicion ${i}`);
  console.log("--------");
});

// map
// permite recorrer un array y devuelve un nuevo array de la misma longitud
// que el original
// me permite retornar en cada vuelta un nuevo elemento a ese array

// let nuevoArray = productos.map((producto, i) => {
//   // [ {nombre: ""}]
//   return { id: i + 1, ...producto };
// });
// console.log(nuevoArray);
let nuevoArray = productos.map((producto) => {
  return { nombre: producto.nombre, precio: producto.precio };
});
console.log(nuevoArray);

// let arrayFiltrado = [];
// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].precio < 100) {
//     arrayFiltrado.push(productos[i]);
//   }
// }

// console.log(arrayFiltrado);

// filter
// siempre siempre siempre devuelve un nuevo array
// no necesariamente devuelve un array de la misma longitud
// me pide retornar un booleano
let nuevoArrayfiltrado = productos.filter((producto) => {
  return producto.precio < 100;
}); // [1 , 4, 5 ]

console.log(nuevoArrayfiltrado);

let arrayFiltradoYmapeado = nuevoArrayfiltrado.map((producto) => {
  return { nombre: producto.nombre, precio: producto.precio };
});

console.log(arrayFiltradoYmapeado);

// find
// para dado un array, encontra un elemento
// devuelve el elemento que encontro o undefined
// me pide retornar un booleano

let elementoBuscado = productos.find((producto) => {
  return producto.nombre === "Auriculares Bluetooth";
});
console.log(elementoBuscado);

// some --> si por lo menos uno cumple la condicion
// devuelve siempre siempre siempre un booleano

let hayAlgunProductoConStockCero = productos.some((productos) => {
  return productos.stock === 0;
});

console.log(hayAlgunProductoConStockCero);

// every --> si todos cumplen la condicion
let todosLosElementosSonCategoriaMuebles = productos.every((productos) => {
  return productos.categoria === "Muebles";
});

console.log(todosLosElementosSonCategoriaMuebles);
