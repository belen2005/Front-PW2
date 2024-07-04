import { RequestsAPI } from "../RequestsAPI.js";
import Hobbie from "../models/hobbies.js";
import { imprimir, obtenerValorInput, validarSesion, eventoClickCerrarSesion } from "../utils/herlpers.js";

validarSesion()
eventoClickCerrarSesion()

const mostrarListaHobbies = (data) => {
  // Limpiamos el error en caso de que exista
  imprimir("lista-error", "");

  // Creamos el contenedor para las tarjetas
  const contenedorHobbies = document.createElement("div");
  contenedorHobbies.classList.add("row", "g-4");

  // Para cada hobbie en el listado, creamos una tarjeta y la agregamos al contenedor
  data.forEach((hobbie) => {
    const tarjetaHobbie = new Hobbie(
      hobbie.id,
      hobbie.titulo,
      hobbie.descripcion,
      hobbie.beneficios
    ).mostrarEnCard();
    contenedorHobbies.innerHTML += tarjetaHobbie;
  });

  // Imprimimos el contenedor de tarjetas en el elemento con id "listado"
  imprimir("listado", contenedorHobbies.outerHTML);


  //  evento click a cada tarjeta de hobbie
  document.querySelectorAll(".card").forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      // Redirigimos a la página de detalle del hobbie
      const id = tarjeta.dataset.id;
      document.location.replace(`detalle-hobbies.html?id=${id}`);
    });
  });
};


const mostrarError = (error) => {
  imprimir("lista-error", error);
};

document.addEventListener("DOMContentLoaded", () => {
  const userInfo = JSON.parse(sessionStorage.getItem("user"));

  document.querySelector("#name-display").textContent = `${userInfo.nombre} ${userInfo.apellido}`;
});




document.querySelector("#input-filtro-tipo").addEventListener("click",()=>{
  const filtroTitulo = obtenerValorInput("input-filtro-tipo")

  RequestsAPI.getHobbies({filtroTitulo})
  .then(mostrarListaHobbies)
  .catch(mostrarError);
})


RequestsAPI.getHobbies()
  .then(mostrarListaHobbies)
  .catch(mostrarError);

  const sidebarWrapper = document.querySelector('.sidebar-wrapper');
  const sidebarContent = document.querySelector('.sidebar-content');
  const formSelect = document.getElementById('input-filtro-tipo');
  const overlay = document.createElement('div');
  overlay.classList.add('sidebar-overlay');
  
  let isSidebarOpen = false;
  
  sidebarWrapper.addEventListener('click', () => {
    if (formSelect === document.activeElement) {
      return; // Ignora el clic si el form-select está enfocado
    }
    
    isSidebarOpen = !isSidebarOpen;
    sidebarWrapper.classList.toggle('show', isSidebarOpen);
    sidebarContent.classList.toggle('show', isSidebarOpen);
  
    if (isSidebarOpen) {
      document.body.appendChild(overlay);
    } else {
      document.body.removeChild(overlay);
    }
  });
  
  overlay.addEventListener('click', () => {
    isSidebarOpen = false;
    sidebarWrapper.classList.remove('show');
    sidebarContent.classList.remove('show');
    document.body.removeChild(overlay);
  });
  
  formSelect.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita la propagación del clic al documento
  });