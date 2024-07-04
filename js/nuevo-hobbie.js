import { RequestsAPI } from "../RequestsAPI.js";
import {
  imprimir,
  obtenerValorInput,
  validarSesion,
} from "../utils/herlpers.js";

validarSesion();

document.querySelector("#boton-nuevo-hobbie").addEventListener("click", () => {
  const titulo = obtenerValorInput("nuevo-titulo");
  const descripcion = obtenerValorInput("nueva-descripcion");
  const como_empezar = obtenerValorInput("como_empezar");
  const equipo_necesario = obtenerValorInput("equipo_necesario");
  const beneficios = obtenerValorInput("nuevo-beneficio");

  if (!titulo || !descripcion || !equipo_necesario || !como_empezar || !beneficios) {
    imprimir("nuevo-hobbie-error", "Complete los campos");
    return;
  }

  RequestsAPI.postHobbie(
    titulo,
    descripcion,
    como_empezar,
    equipo_necesario,
    beneficios
  )
    .then(() => {
      document.location.replace("index.html");
    })
    /* .catch((error) => {
      imprimir("nuevo-hobbie-error", error);
    }); */
});


