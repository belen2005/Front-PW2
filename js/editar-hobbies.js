import { validarSesion, obtenerValorInput,
  imprimir,} from "../utils/herlpers.js";
import { RequestsAPI } from "../RequestsAPI.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idHobbie = params.get("id");



const mostrarError = (error) => {
  imprimir("editar-hobbies-error", error);
};

const popularCampos = (data) => {
  document.querySelector("#editar-titulo").value = data.titulo;
  document.querySelector("#editar-descripcion").value = data.descripcion;
  document.querySelector("#equipo-necesario").value = data.equipo_necesario;
  document.querySelector("#como-empezar").value = data.como_empezar;
  document.querySelector("#beneficios").value = data.beneficios;
};

RequestsAPI.getHobbie(idHobbie)
  .then(popularCampos)
  .catch((error) => {
    mostrarError(error);
  });

  document.querySelector("#boton-actualizar-hobbies").addEventListener("click", () => {
    const titulo = obtenerValorInput("editar-titulo");
    const descripcion = obtenerValorInput("editar-descripcion");
    const como_empezar = obtenerValorInput("equipo-necesario");
    const equipo_necesario = obtenerValorInput("como-empezar");
    const beneficios = obtenerValorInput("beneficios");
  
    if (!titulo || !descripcion || !equipo_necesario || !como_empezar || !beneficios) {
      imprimir("editar-hobbies-error", "Complete los campos");
      return;
    }
  
    RequestsAPI.putHobbie(
      idHobbie,
      titulo,
      descripcion,
      como_empezar,
      equipo_necesario,
      beneficios
    )
    .then(() => {
      // si la mascota se actualiza correctamente, redirigimos al detalle de la mascota
      document.location.replace(`detalle-hobbies.html?id=${idHobbie}`);
    })
      /* .then(() => {
        document.location.replace("detalle-hobbies.html?id=${idHobbie}");
      }) */
      .catch((error) => {
        imprimir("editar-hobbies-error", error);
      });
  });