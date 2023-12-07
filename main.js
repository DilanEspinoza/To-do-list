/* Funcion para agregar contenido al todo */

btnAgregar.addEventListener("click", agregarContenido);

function agregarContenido() {
  const contenedorTituloTarea = document.getElementById(
    "contenedor__titulo_tarea"
  ).value;

  const contenedorDescripcionTarea = document.getElementById(
    "contenedor__descripcion_tarea"
  ).value;
  const $contenedorTareas = document.querySelector(".contenedor__tareas");
  const btnEliminar = document.createElement("button");

  let contenedorTarea = document.createElement("div");
  let descripcionTarea = document.createElement("p");
  let $tituloInformacion = document.querySelector(".titulo-informacion");

  const contenedor = `
  <div class="">
  <h2>${contenedorTituloTarea}<h2>
  </hr>
  <p>${contenedorDescripcionTarea}</p>
  <button>
  ${btnEliminar}
  </button>
  </div>
  `;

  contenedorTarea.setAttribute("class", "contenedor_tarea");
  tituloTarea.setAttribute("class", "titulo-tarea");
  descripcionTarea.setAttribute("class", "descripcion-tarea");
  btnEliminar.setAttribute("id", "btn-eliminar");

  tituloTarea.textContent = contenedorTituloTarea;
  descripcionTarea.textContent = contenedorDescripcionTarea;
  btnEliminar.innerHTML = "Eliminar";

  contenedorTarea.appendChild(tituloTarea);
  contenedorTarea.appendChild(hr);
  contenedorTarea.appendChild(descripcionTarea);
  contenedorTarea.appendChild(btnEliminar);
  $contenedorTareas.appendChild(contenedorTarea);

  btnEliminar.addEventListener("click", eliminarTarea);

  function eliminarTarea() {
    contenedorTareas.removeChild(contenedorTarea);
  }

  if (contenedorTareas.childElementCount === 4) {
    $tituloInformacion.textContent = "Ya no puedes agregar mas tareas";
    eliminarTarea();
  }

  if (contenedorTituloTarea == "" && contenedorDescripcionTarea == "") {
    eliminarTarea();
  }

  if ((contenedorDescripcionTarea.length = 1000)) {
    console.log("Mucho textoooo");
  }
}
