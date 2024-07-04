export default class Hobbie {
  id;
  titulo;
  descripcion;
  beneficios;

  constructor(
    id,
    titulo,
    descripcion,
    equipo_necesario,
    como_empezar,
    beneficios
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.beneficios = beneficios;
    this.equipo_necesario = equipo_necesario;
    this.como_empezar = como_empezar;
  }

  /*  mostrarEnCard() {
    return `
      <div class="col-md-4 mb-4">
        <div class="card rounded-0 border-0 h-100" data-id="${this.id}">
          <div class="item-card-hobbies d-flex align-items-center justify-content-center p-3 h-100" data-id="${this.id}">
            <h5 class="card-title text-center text-white">${this.titulo}</h5>
          </div>
        </div>
      </div>
    `;
  } */
  mostrarEnCard() {
    /*       const colors = ['#e3dbfa', '#fbe2f4', '#ffe1cc', '#d4f6ed', '#f0d9ff', '#ffd1f0', '#ffe8d6', '#c9f5f0', '#f7f2ff']; */
    const colors = [
      " #BFBFFF ",
      " #7F7FFF ",
      "  #FFBFBF  ",
      " #e3dbfa ",
      " #D0D0D0 ",
      "#ffd1f0",
      "#ffe8d6",
      "#c9f5f0",
      " #FF7F7F ",
    ];
    const usedColors = [];

    // Buscar un color que no se haya usado antes
    let randomColor;
    do {
      const randomIndex = Math.floor(Math.random() * colors.length);
      randomColor = colors[randomIndex];
    } while (usedColors.includes(randomColor));

    usedColors.push(randomColor);

    return `
        <div class="col-md-4 ">
          <div class="card rounded-3  h-100" data-id="${this.id}">
            <div class="item-card-hobbies d-flex flex-column align-items-start justify-content-between p-3 h-100 rounded-3" data-id="${this.id}" style="background-color: ${randomColor};">
              <div>
                <h5 class="card-title text-dark mb-3" style="font-size: 1.5rem;">${this.titulo}</h5>
                <p class="card-text text-dark">${this.descripcion}</p>
              </div>
              <a href="#" class="btn btn-dark rounded-3 mt-3">Ver más</a>
            </div>
          </div>
        </div>
      `;
  }

  // Método para mostrar el detalle de la mascota
  mostrarDetalle() {
    return `
     
    
        <div class="card-body">
          <h5 class="card-title text-center">${this.titulo}</h5>
          <p class="card-text">
            <strong>Descripción:</strong> ${this.descripcion}<br>
            <strong>Equipo Necesario:</strong> ${this.equipo_necesario}<br>
            <strong>Como Empezar:</strong> ${this.como_empezar}<br>
            <strong>Beneficios:</strong> ${this.beneficios}
          </p>
        </div>
      </div>
      </div>
    

    `;
  }
}
