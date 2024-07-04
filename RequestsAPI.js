const obtenerUrl = (ruta) => ` ${RequestsAPI.urlBaseBackend}/${ruta}`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const token = sessionStorage.getItem("session");
if (token) {
  headers.authorization = token;
}

const procesarRespuesta = (res) => {
  return res.json().then((data) => {
    if (data.error) {
      throw new Error(data?.error);
    }

    return data;
  });
};
const manejarErrores = (error = new Error("Error desconocido")) => {
  console.error("Ha ocuurido un error:", error.message);
  throw error.message;
};

export class RequestsAPI {
  static urlBaseBackend = "https://backend-pw2-1.onrender.com";

  static login(email, password) {
    const body = JSON.stringify({ email, password });

    return fetch(obtenerUrl("login"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static logout() {
    return fetch(obtenerUrl("logout"), { method: "POST", headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }
   // post /registrar
   static registrar(body) {
    return fetch(obtenerUrl("registrar"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static getHobbies(opciones = {}) {
    const queryParams = new URLSearchParams({});

    if (opciones.filtroTitulo) {
      queryParams.set("titulo", opciones.filtroTitulo);
    }
    /*  if(opciones.filtro){
      queryParams.set("titulo", opciones.filtroTitulo)
    } */

    return fetch(obtenerUrl("hobbies?" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  /* static getHobbie(idHobbie) {
    return fetch(obtenerUrl(`hobbies/${idHobbie}`), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  } */
  static getHobbie(idHobbies) {
    return fetch(obtenerUrl(`hobbie/${idHobbies}`), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static postHobbie(
    titulo,
    descripcion,
    como_empezar,
    equipo_necesario,
    beneficios
  ) {
    const body = JSON.stringify({
      titulo,
      descripcion,
      como_empezar,
      equipo_necesario,
      beneficios,
    });
    return fetch(obtenerUrl("Hobbie"), { method: "POST", headers, body })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static putHobbie(
    idHobbie,
    titulo,
    descripcion,
    como_empezar,
    equipo_necesario,
    beneficios
  ) {
    const body = JSON.stringify({
      titulo,
      descripcion,
      como_empezar,
      equipo_necesario,
      beneficios,
    });
    return fetch(obtenerUrl (`hobbie/${idHobbie}`), { method: "PUT", headers, body })
    .then(procesarRespuesta)
    .catch(manejarErrores);
  }

  static deleteHobbie(idHobbie){
    return fetch(obtenerUrl(`hobbie/${idHobbie}`), {method: "DELETE", headers})
    .then(procesarRespuesta)
    .catch(manejarErrores);
  }
}
