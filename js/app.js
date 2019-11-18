const divsDeCambio = document.querySelector("#aside");
const divGaleria = document.querySelector("#galeria");
const divInformacion = document.querySelector("#informacion");
const divPublicaciones = document.querySelector("#publicaciones");
const album = document.querySelector(".album");
const fotoPrincipal = document.querySelector("#fotoPrincipal");
const botonPublicar = document.querySelector(".addBtn");
const lista = document.querySelector("#myUL");
const botonSubirFoto = document.querySelector("#botonSubirFoto");
const infoAdicional = document.querySelector("#infoAdicional");
const botonGaleria = document.querySelector("#botonGaleria");
const botonPublicaciones = document.querySelector("#botonPublicaciones");
const botonInformacion = document.querySelector("#botonInformacion");
const myInput2 = document.querySelector("#myInput");

divsDeCambio.addEventListener("click", e => {
  if (e.target.className == "botonCambio") {
    if (e.target.id == "botonGaleria") {
      divGaleria.style.zIndex = 0;
      botonGaleria.style.background = "#f7de1c";
      divInformacion.style.zIndex = -1;
      botonInformacion.style.background = "#e8e7e1";
      divPublicaciones.style.zIndex = -2;
      botonPublicaciones.style.background = "#e8e7e1";
    } else if (e.target.id == "botonInformacion") {
      divGaleria.style.zIndex = -1;
      botonGaleria.style.background = "#e8e7e1";
      divInformacion.style.zIndex = 0;
      botonInformacion.style.background = "#f7de1c";
      divPublicaciones.style.zIndex = -2;
      botonPublicaciones.style.background = "#e8e7e1";
    } else if (e.target.id == "botonPublicaciones") {
      divGaleria.style.zIndex = -2;
      botonGaleria.style.background = "#e8e7e1";
      divInformacion.style.zIndex = -1;
      botonInformacion.style.background = "#e8e7e1";
      divPublicaciones.style.zIndex = 0;
      botonPublicaciones.style.background = "#f7de1c";
    }
  }
});

album.addEventListener("click", e => {
  if (e.target.className == "foto") {
    let rutaFoto = e.target.src;
    fotoPrincipal.setAttribute("src", rutaFoto);
    fotoPrincipal.setAttribute("alt", "foto");
  }
});

botonPublicar.addEventListener("click", () => {
  publicaciones();
});

myInput2.addEventListener("keyup", e => {
  if (e.key == "Enter") {
    publicaciones();
  }
});

function publicaciones() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

lista.addEventListener("click", e => {
  if (e.target.className == "close") {
    let listaARemover = e.target.parentElement;
    lista.removeChild(listaARemover);
  }
});

// Prueba subir foto

botonSubirFoto.addEventListener("click", e => {
  let nuevaEtiquetaImagen = document.createElement("img");
  nuevaEtiquetaImagen.className = "foto";
  let ruta = document.querySelector("#subirFoto");
  let nombreArchivo = ruta.files[0].name;
  nuevaEtiquetaImagen.src = `img/${nombreArchivo}`;
  album.appendChild(nuevaEtiquetaImagen);
});
//Quitar Foto
album.addEventListener("dblclick", e => {
  if (e.target.className == "foto") {
    album.removeChild(e.target);
  }
});

infoAdicional.addEventListener("click", e => {
  if (e.target.className == "btnForm") {
    const infoEstatica = document.querySelector("#infoEstatica");
    const infoEditable = document.querySelector("#infoEditable");
    if (e.target.id == "btnEditarInfo") {
      infoEstatica.style.zIndex = -1;
      infoEditable.style.zIndex = 0;
    }
    if (e.target.id == "btnGuardarInfo") {
      const pPres = document.querySelector("#pPres");
      const pTel = document.querySelector("#pTel");
      const pCiudad = document.querySelector("#pCiudad");
      const pTrabajo = document.querySelector("#pTrabajo");
      const pAcademica = document.querySelector("#pAcademica");
      const pRedes = document.querySelector("#pRedes");
      const pWeb = document.querySelector("#pWeb");

      const inputPres = document.querySelector("#inputPres");
      const inputTel = document.querySelector("#inputTel");
      const inputCiudad = document.querySelector("#inputCiudad");
      const inputTrabajo = document.querySelector("#inputTrabajo");
      const inputAcademica = document.querySelector("#inputAcademica");
      const inputRedes = document.querySelector("#inputRedes");
      const inputWeb = document.querySelector("#inputWeb");

      pPres.innerHTML = inputPres.value;
      pTel.innerHTML = inputTel.value;
      pCiudad.innerHTML = inputCiudad.value;
      pTrabajo.innerHTML = inputTrabajo.value;
      pAcademica.innerHTML = inputAcademica.value;
      pRedes.innerHTML = inputRedes.value;
      pWeb.innerHTML = inputWeb.value;

      infoEstatica.style.zIndex = 0;
      infoEditable.style.zIndex = -1;
    }
  }
});

const infoNombre = document.querySelector("#infoNombre");
const infoApellido = document.querySelector("#infoApellido");
const infoCorreo = document.querySelector("#infoCorreo");
const infoFecha = document.querySelector("#infoFecha");

infoNombre.innerHTML = localStorage.getItem("nombre");
infoApellido.innerHTML = localStorage.getItem("apellido");
infoCorreo.innerHTML = localStorage.getItem("correoElectronico");
infoFecha.innerHTML = localStorage.getItem("fechaNacimiento");
