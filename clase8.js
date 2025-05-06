// hacer una peticion a una api
// endpoint y donde va el verbo ( por defecto va el GET )
const getProducts = async () => {
  let contenedor = document.getElementById("container-products");
  contenedor.innerHTML = `<div class="loader"></div>`;
  let bloqueFinal = document.getElementById("bloque-final");
  try {
    let respuesta = await fetch("https://fakestoreapi.com/products");
    if (!respuesta.ok) {
      throw new Error("este es un error custom que ponemos nosotros");
    }
    // parsear
    // "[]" --> "[]".json() --> []
    let productos = await respuesta.json();
    // container-products

    setTimeout(() => {
      contenedor.innerHTML = "";

      let contendioProductos = "";

      productos.forEach((producto) => {
        contendioProductos += `<div>${producto.title}</div>`;
      });
      contenedor.innerHTML = contendioProductos;
    }, 2000);
  } catch (error) {
    console.log(error.message);
    let esElCustom = error.message.includes(
      "este es un error custom que ponemos nosotros"
    );
    console.log(esElCustom);
    setTimeout(() => {
      contenedor.innerHTML = `<h2>Algo salio mal bla erorr: ${
        esElCustom ? error.message : "ERROR GENERICO"
      }</h2>`;
    }, 2000);
  } finally {
    bloqueFinal.textContent = "Termino el bloque try catch";
  }
};

getProducts();

// ASINCRONICAS
// "{}" ---> "{}".json() --->{}

// pintar los productos en el frontend

// const pintarProductos = async (productos) => {
//   let products = await productos;
//   console.log(products);
// };
// pintarProductos(getProducts());
