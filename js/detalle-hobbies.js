import { RequestsAPI } from "../RequestsAPI.js";
import Hobbies from "../models/hobbies.js";
import { imprimir, validarSesion } from "../utils/herlpers.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idHobbie = params.get("id");

const mostrarError = (error) => {
  imprimir("detalle-error", error);
};

const mostrarDetalle = (data) => {
  console.log(data);
  const hobbie = new Hobbies(
    data.id,
    data.titulo,
    data.descripcion,
    data.beneficios,
    data.equipo_necesario,
    data.como_empezar
  );
  imprimir("detalle", hobbie.mostrarDetalle());
};

document.querySelector("#boton-editar-hobbie").addEventListener("click", () => {
  document.location.replace(`editar-hobbies.html?id=${idHobbie}`);
})

document.querySelector("#boton-eliminar-hobbie").addEventListener("click",()=>{
  RequestsAPI.deleteHobbie(idHobbie)
  .then(()=>{
    document.location.replace("index.html")
  })
  .catch((error)=>{
    mostrarError (error)
  })
})

RequestsAPI.getHobbie(idHobbie)
  .then(mostrarDetalle)
  .catch((error) => {
    mostrarError(error);
  });
