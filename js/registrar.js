import {
    validarSesion,
    obtenerValorInput,
    imprimir,
  } from "../utils/herlpers.js";
  import { RequestsAPI } from "../RequestsAPI.js";
  
  // validamos la sesion del usuario
  validarSesion();
  
  // evento click para registrar un nuevo usuario
  document
    .querySelector("#form-register-submit")
    .addEventListener("click", () => {
      // obtenemos los valores de los inputs
      const nombre = obtenerValorInput("form-register-nombre");
      const apellido = obtenerValorInput("form-register-apellido");
      const email = obtenerValorInput("form-register-email");
      const password = obtenerValorInput("form-register-password");
  
      // validamos que los campos no esten vacios
      if (!nombre || !apellido || !email || !password) {
        // mostramos un error si los campos estan vacios
        imprimir("form-register-error", "Por favor complete todos los campos");
        return;
      }
  
      // creamos el body del post, con los valores de los inputs
      const body = JSON.stringify({ nombre, apellido, email, password });
      // hacemos el fetch, usando el metodo register de request api
      RequestsAPI.registrar(body)
        .then(() => {
          // si el registro es exitoso, redirigimos al usuario a la pagina de login
          document.location.replace("login.html");
        })
        .catch((error) => {
          // si hay un error, lo mostramos en el consola y en el formulario
          imprimir("form-register-error", error);
        });
    });
  