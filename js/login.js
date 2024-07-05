import { RequestsAPI } from "../RequestsAPI.js";
import {
  obtenerValorInput,
  imprimir,
  validarSesion,
} from "../utils/herlpers.js";

validarSesion();
const botonLogin = document.querySelector("#form-login-submit");

botonLogin.addEventListener("click", () => {
  const email = obtenerValorInput("form-login-email");
  const password = obtenerValorInput("form-login-password");

  RequestsAPI.login(email, password)
    .then((data) => {
      sessionStorage.setItem("session", data.session);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      document.location.replace("index.html");
    })
    .catch((error) => {
      console.error(error);
      imprimir("form-login-error", "Email o contraseña incorrecto.");
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const registerLink = document.querySelector('.signin a');

  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'registrar.html';
  });
});
