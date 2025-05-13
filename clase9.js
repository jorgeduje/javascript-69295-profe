// const obtenerProductos = async ()=>{
//     await fetch("dsada")
// }

// res ---> resolve ---> funcion
// rej ---> reject

const obtenerProductos = () => {
  const productos = new Promise((resolve, reject) => {
    let inicioSesion = true;
    if (inicioSesion) {
      resolve(["producto 1", "producto 2", "producto 3"]);
    } else {
      reject({ status: 400, message: "algo salio mal" });
    }
  });

  productos
    .then((respuesta) => {
      console.log("la promesa se resolvio bien");
      console.log(respuesta);
    })
    .catch((error) => {
      console.log("la promesa se rechazo, salio mal");
      console.log(error);
    })
    .finally(() => {
      console.log("termina la promesa");
    });
};

// obtenerProductos();

// const getPostsAsync = async () => {
//   try {
//     const obtenerLosPosteos = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     const respuesta = await obtenerLosPosteos.json();
//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getPostsAsync();

const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  let usuarios = await obtenerUsuarios();
  const usuariosMapeados = usuarios.map((usuario) => {
    return { id: usuario.id, name: usuario.name };
  });

  const seccionPosteos = document.getElementById("container-posts");
  let tarjetas = "";

  let diccionarioDeUsuarios = {};
  usuariosMapeados.forEach((usuario) => {
    diccionarioDeUsuarios[usuario.id] = usuario.name;
  });

  seccionPosteos.innerHTML = "<section></section>";
  const obtenerLosPosteos = fetch("https://jsonplaceholder.typicode.com/posts");
  obtenerLosPosteos
    .then((respuestaEnString) => respuestaEnString.json())
    .then((posteos) => {
      posteos.forEach((posteo) => {
        let userId = posteo.userId;
        let title = posteo.title;
        // const user = usuariosMapeados.find((usuario) => usuario.id === userId);
        tarjetas += `<div class="post">
                        <h2>${title}</h2>
                        <h2>${diccionarioDeUsuarios[userId]}</h2>
                    </div>`;
      });

      seccionPosteos.innerHTML = tarjetas;
    })
    .catch((error) => {
      console.log(error);
    });
};

getPosts();

// [ {id, name } {} {} {} {}]

let diccionarioDeUsuarios = {
  1: "pepe",
  2: "juan",
  3: "maria",
};
diccionarioDeUsuarios[2];
// diccionarioDeUsuarios.name;
diccionarioDeUsuarios[1];
diccionarioDeUsuarios[3];

// let diccionario = {
//   x: "pepe",
//   2: "juan",
//   3: "maria",
// };

// let persona = {
//   nombre: "carmen",
//   edad: 22,
// };

// console.log(diccionario["3"]);
