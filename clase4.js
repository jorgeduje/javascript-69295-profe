// tipos de datos
// booleanos- strings - number - null - undefined

// estructuras de datos

// OBJETOS
// let nombreUsuario = "asdasd"
// let emailUsuario = "dsadsadas"
// let edadUsuario = 222
// let edadUsuario = 222
// let edadUsuario = 222
// let edadUsuario = 222
// let edadUsuario = 222
// let edadUsuario = 222
// let edadUsuario = 222

// una variable con el tipo de dato object
// pares de clave : valor

// propiedades
// metodos

let usuario = {
  nombre: "pepe",
  email: "pepe@gmail.com",
  edad: 33,
  estaRegistrado: true,
  saludar: function () {
    return `Hola soy ${this.nombre} como estas?`;
  },
};
// console.log(usuario);

// dot notation

console.log(usuario.nombre);
console.log(usuario.edad);

// bracket notacion
console.log(usuario["edad"]);
console.log("-----------");

let x = usuario.saludar(); // -->
console.log(x);

// saludar();

// let user = fetch("dsadasdsad")

// user

console.log(usuario);

// agregar o editar una propiedad

console.log(usuario.apellido);
usuario.apellido = "perez";
usuario.edad = 50;

console.log(usuario);

// array - compuestos por ELEMENTOS
// trabajan con posiciones y empiezan en CERO
let numerosDeLaSuerte = [21, 44, 22, 33, 66, 12];
let nombresMascotas = ["pepe", "jack", "juan"];

console.log(nombresMascotas);

console.log(nombresMascotas[0]);
console.log(nombresMascotas[50]);

// Y ESTE SI ES EL DATO QUE VAN A USAR TODOS LOS DIAS DE SU VIDA

// ARRAYS de OBJETOS
// productos --> array de objetos
// usuarios --> array de objetos
// usuarios --> array de objetos
console.log("-----------");
console.log("-----------");
console.log("-----------");
const funcionSaludar = function () {
  console.log(`Hola soy ${this.nombre} como estas?`);
};
let usuarios = [
  {
    nombre: "pepe",
    email: "pepe@dsadasda",
    edad: 22,
    saludar: funcionSaludar,
  },
  {
    nombre: "juan",
    email: "juan@dsadasda",
    edad: 23,
    saludar: funcionSaludar,
  },
  {
    nombre: "carmen",
    email: "carmen@dsadasda",
    edad: 24,
    saludar: funcionSaludar,
  },
];

console.log(usuarios);
console.log(usuarios[2].email);

let persona = {
  nombre: "pepe",
  numeros: [12, 55, 33, 21],
};

console.log(persona.numeros[2]);

let saludoCarmen = usuarios[2].saludar();
console.log(saludoCarmen);

let numeros = [1, 5, 3, 7];

// 4
const recorrerArray = () => {
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
};

recorrerArray();

let users = [
  {
    nombre: "pepe",
    email: "pepe@dsadasda",
    edad: 22,
    saludar: funcionSaludar,
  },
  {
    nombre: "juan",
    email: "juan@dsadasda",
    edad: 23,
    saludar: funcionSaludar,
  },
  {
    nombre: "carmen",
    email: "carmen@dsadasda",
    edad: 24,
    saludar: funcionSaludar,
  },
  {
    nombre: "maria",
    email: "juan@dsadasda",
    edad: 23,
    saludar: funcionSaludar,
  },
  {
    nombre: "luis",
    email: "carmen@dsadasda",
    edad: 24,
    saludar: funcionSaludar,
  },
];

// agregar a cada elemento del array un id
// tiene que ser secuencial y empezar en 1
console.log("---------");
const generarIds = (unArray) => {
  for (let i = 0; i < unArray.length; i++) {
    unArray[i].id = i + 1;
  }
};

generarIds(users);

console.log(users);

// generarIds( usuarios  )

// una funcion que salude a todos los usuarios de mi array
//  cada usuario tiene un metodo que se llama saludar

const saludoGeneral = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].saludar();
  }
};

saludoGeneral(users);
