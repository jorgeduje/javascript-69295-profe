// class

let cuentas = [
  {
    titular: "pepe",
    saldo: 200,
    tipoDeCuenta: "cuenta corriente",
    numeroCuenta: 1231232131,
    cbu: 123123213213213,
  },
  {
    titular: "Carmen",
    saldo: 300,
    tipoDeCuenta: "cuenta corriente",
    numeroCuenta: 123456,
    cbu: 1000000,
  },
];

// // cuentas.push(15, "dsadas", {}, true);

// console.log(cuentas);

// let cuentaNueva = {
//   titular: "juan",
//   saldo: 200,
//   tipoDeCuenta: "cuenta corriente",
//   numeroCuenta: 1231232131,
//   cbu: 123123213213213,
// };

// cuentas.push(cuentaNueva);

// console.log(cuentas);

// Class --> molde  o una fabrica

class CuentaBancaria {
  constructor(titular, saldo, tipoDeCuenta, numeroCuenta, cbu) {
    this.titular = titular;
    this.saldo = saldo;
    this.tipoDeCuenta = tipoDeCuenta;
    this.numeroCuenta = numeroCuenta;
    this.cbu = cbu;
  }
}

// instanciar la clase
cuentas.push(
  new CuentaBancaria("juan", 50, "caja de ahorro", 123213, 213123123),
  new CuentaBancaria("maria", 400, "caja de ahorro", 12321312, 4535435),
  new CuentaBancaria("gonzalo", 50, "caja de ahorro", 123123, 5435435)
);

console.log(cuentas);

console.log(cuentas[3].titular);

// Crear un sistema bancario

// crear un objeto banco
// que tenga clientes
// que tenga metodos para consultar un cliente en base a un nombre y devolver su cuenta
// que tenga un metodo para realizar depositos , en base a un titular y un monto
// que tenga un metodo para realizar extraccion , en base a un titular y un monto. Debemos
// verificar que el monto no exeda el dinero disponible
console.log("--------------");
console.log("--------------");
console.log("--------------");
console.log("--------------");

let banco = {
  clientes: cuentas,
  consultarCliente: function (nombre) {
    let cuentaFinal = "No he encontrado esa cuenta";
    for (let i = 0; i < this.clientes.length; i++) {
      let elemento = this.clientes[i];
      if (elemento.titular.toLowerCase() === nombre.toLowerCase()) {
        cuentaFinal = elemento;
      }
    }

    return cuentaFinal;
  },

  realizarDeposito: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);
    if (typeof cliente === "string") {
      return cliente;
    } else {
      cliente.saldo += cantidad;
      return `Deposito realizado con exito, el nuevo saldo de  ${cliente.titular} es de ${cliente.saldo}`;
    }
  },

  realizarExtraccion: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);
    if (typeof cliente === "string") {
      return cliente;
    }

    if (cliente.saldo >= cantidad) {
      cliente.saldo -= cantidad;
      return `La extraccion se realizo con exito, su nuevo saldo es ${cliente.saldo}`;
    }

    return "lo siento, no tiene saldo suficiente";
  },
};
// que tenga un metodo para realizar extraccion , en base a un titular y un monto. Debemos
// verificar que el monto no exeda el dinero disponible
// console.log(banco.clientes);

let cuentaEncontrada = banco.consultarCliente("carmen");
console.log(cuentaEncontrada);
console.log("----------------");
let ticket = banco.realizarDeposito("carmen", 500);
console.log(ticket);
// let cuentaEncontradaDos = banco.consultarCliente("manuel");
// console.log(cuentaEncontradaDos);

// let apellido = "pERez";

// console.log(apellido.toLowerCase() === "PeReZ".toLowerCase());

// console.log(apellido.toLowerCase());
// console.log(apellido.toUpperCase());
console.log("-----------");
let ticketExtraccion = banco.realizarExtraccion("carmen", 1200);
console.log(ticketExtraccion);
