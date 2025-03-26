// condicionales
console.log("clase 2");

// console.log(nombre);

let nombre = "pepe";

// operadores

let n1 = 100;
let n2 = 50;

let resultado = n1 / n2; // + - * /

console.log(resultado);

// % ---> modulo y devuelve el resto

console.log(n1 / n2); // --> devuelve el resultado de la division
console.log(n1 % n2); // --> devuelve el resto de la division

console.log("modulo de 11 entre 2 ", 11 % 2); // --> 1

// si un numero es par
// si es un numero entero

let numero = 12;

let esPar = numero % 2 == 0;
let esImpar = numero % 2 != 0;

console.log("es par ", esPar);
console.log("es impar ", esImpar);

console.log("-------");

let booleano = 2 != 2;

let a = "1";
let b = 1;

console.log("igualdad simple ", a == b); // evalua el dato
console.log("igualdad estricta ", a === b); // evalua el dato pero tambien el tipo de dato

console.log("desiguldad simple ", a != b); // false
console.log("desiguldad estricta ", a !== b); // true

let esMayor = false;

console.log(esMayor === true); // --> true -- false
console.log(esMayor); // true - false

console.log(esMayor !== true); // false
console.log(!esMayor); // lo contario a lo que tiene

console.log(n1 > n2); // true
console.log(n1 < n2); // false
console.log(n1 >= n2); // true
console.log(n1 <= n2); // false

// condicionales

// if --> uso cuando tengo solo 1 camino, o cuando tengo mas de 2
// ternario --> lo uso solo cuando tengo 2 caminos
// switch
console.log("-----");
// let edadUsuario = Number(prompt("ingresa tu edad"));
let edadUsuario = 2;
// console.log(Number(edadUsuario)); // "55" - 55
// console.log(+edadUsuario); // "55" - 55

if (edadUsuario >= 18) {
  // bloque de codigo
  console.log("si, podes pasar");
} else {
  // bloque
  console.log("no, no podes pasar");
}

// condicion ? lo que quiero si es verdadero : lo que quiero si es falso
// let resultadoCondicion =
//   edadUsuario >= 18 ? "si, podes pasar" : "no, no podes pasar";

console.log(edadUsuario >= 18 ? "si, podes pasar" : "no, no podes pasar");

// controlar el acceso a un recital de musica

// si es mayor lo dejamos pasar
// si es menor pero viene con un adulto, le mostramos que si puede pasar pero con el adulto
// si es menor y noi viene con un adulto, no puede pasar

let edadPersona = 12;
let vieneAcompañado = true;

if (edadPersona >= 18) {
  console.log("si podes pasar");
} else if (edadPersona < 18 && vieneAcompañado) {
  console.log("podes pasar con un adulto ");
} else {
  console.log(" no podes pasar");
}

// and --> && --> y
// OR  --> || --> o
console.log("------------");
// logica booleana
let nombrePersona = "pepe";
let apellidoPersona = "del paso";

// if (nombrePersona === "juan" && apellidoPersona === "del paso") {
//   console.log("se cumple");
// }

if (nombrePersona === "juan" || apellidoPersona === "del paso") {
  console.log("se cumple");
}
console.log("---------- CICLOS --------");

// for
// while
// do while

// siempre tenemos que cortar el ciclo
let num = 15;
// num = 30 // 30
num = num + 30; // 45
num += 30; //  45

num++; // 16
num++; // 17
num--;

// inicializacion ;  la condicion ; modificador
for (let i = 1; i <= 10; i++) {
  console.log("hola", i);
}

console.log("chau");

// let i = 12;
// while (i <= 10) {
//   console.log("hola");

//   i++;
// }

// let i = 1;

// do {
//   console.log("hola", i);

//   i++;
// } while (i <= 10);

// un sistema que determine si puede pasar o no
// pero a las 30 personas de la fila
// necesito preguntar a cada una la edad

let personasQueSi = 0;
let personasQueNo = 0;

for (let i = 1; i <= 30; i++) {
  //   let edad = Number(prompt("ingresa tu edad"));
  let edad = 2;
  if (edad >= 18) {
    console.log("podes pasar");
    personasQueSi++;
  } else {
    console.log("no podes pasar");
    personasQueNo++;
  }
}
console.log(
  "la persona que atiende en la entrada, termino su jornada y se puede ir"
);

console.log("entraron " + personasQueSi + " personas");
console.log("no entraron " + personasQueNo + " personas");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
