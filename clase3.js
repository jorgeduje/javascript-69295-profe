// FUNCIONES

// declaradas --> hoisting

// let nombre = "pepe";
let edad = 22;
let x = saludar();
console.log(x);
function saludar(nombreDeUsuario, edad, apellidoDeUsuario) {
  // bloque de codigo de la funcion
  // let saludo2 = "hola " + nombreDeUsuario + " como estas?";
  // template literals - backsticks

  let saludo = `hola ${nombreDeUsuario} - ${apellidoDeUsuario} como estas?`;
  return saludo;
}

// la ejecucion de una funcion
// Siempre se transforma en lo que la funcion retorna
let respuestaSaludo = saludar("lopez", "juancito");

console.log(respuestaSaludo);

// quiero una funcion que reciba 1 numero y lo multiplique x 3
// para luego guardar esa informacion y mostrala en un parrafo

function multiplicar(num) {
  return num * 3;
}

let resultadoMulti = multiplicar(5);
console.log(resultadoMulti);
console.log("-----------------");
// SCOPE ---> el ambiente donde existe una variable

// la variable existe en el mismo scope de donde fue creada
// o en scope mas internos

let numerito = 12;
console.log(numerito);
function test() {
  console.log(numerito);
  if (true) {
    console.log(numerito);
  }
}

test();
console.log("-----------");

let nombre = "juan";

function testScope() {
  let nombre = "pepe";

  console.log(nombre);
}

testScope();

// expresadas ---> anonimas
// expresada normal
// arrow function

const sumar = function (n1, n2) {
  return n1 + n2;
};

let resultado = sumar(5, 15);
console.log(resultado);

// sumar = function(){}
// sumar = "dsad"

// arrow
const restar = (n1, n2) => n1 - n2;

let resultadoResta = restar(10, 4);
console.log(resultadoResta);

// funcion que reciba un numero y lo divida entre 2

const dividir = (numero) => numero / 2;

let resultadoDiv = dividir(8);
console.log(resultadoDiv);

// funcion que reciba un numero y muestre por consola la tabla de
// multiplicar de dicho numer
// en cada log quiero mostrar si ese resultado es par o no

const mostrarTabla = (numero) => {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    let texto = `${numero} * ${i} = ${resultado}`;
    console.log(texto);
    if (resultado % 2 === 0) {
      console.log("es par");
    } else {
      console.log("es impar");
    }
  }
};

mostrarTabla(7);

// 7
// 7 * 1 = 7
// es impar
// 7 * 2 = 14
// es par
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 10 = 30
