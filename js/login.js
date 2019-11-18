// Script que muestra el log antes de mostrar la pagina
var carga = document.querySelector("#cargaLogo");
// El método "setTimeOut" ejecuta una función luego que se cumpla el tiempo indicado | setTimeout(function() { ... }, tiempo);
setTimeout(function() {
    carga.className = "borrarCarga";
}, 1800);

// VALIDACIÓN FORMULARIO REGISTRO
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correoElectronico = document.querySelector("#correoElectronico");
const contrasena = document.querySelector("#contrasena");
const confirmarContrasena = document.querySelector("#confirmarContrasena");
const fechaNacimiento = document.querySelector("#fechaNacimiento");
const terminos = document.querySelector("#terminos");
const boton = document.querySelector("#btnRegistro");
const form = document.querySelector("#form");
let i = 0; // Variable que se encargará de contar los errores al ingresar los datos en el formulario

// Aquí se obtiene la fecha actual para compararla con la del formulario y ingrese una fecha fuera del rango (en éste caso, una fecha futura)
let fecha = new Date(); //Fecha actual
let mes = fecha.getMonth()+1; //obteniendo mes
let dia = fecha.getDate(); //obteniendo dia
let year = fecha.getFullYear(); //obteniendo año
if (dia < 10) {
    dia = '0'+ dia; //agrega cero si el menor de 10
}
if (mes < 10) {
    mes = '0'+ mes;
}
fecha = year +"-"+ mes +"-"+ dia;

document.querySelector("#textoRegistro").addEventListener("mouseover", form =>{
    document.querySelector(".formulario1").style.transition = "opacity "+ 0.7+"s";
    document.querySelector(".formulario1").style.opacity = 1;
    document.querySelector("#textoRegistro").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#textoRegistro").style.opacity = 0;
    document.querySelector("#textoRegistro").style.display = "none";
});
document.querySelector("#registro").addEventListener("mouseout", form =>{
    document.querySelector(".formulario1").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#textoRegistro").style.display = "flex";
    document.querySelector(".formulario1").style.opacity = 0;
    document.querySelector("#textoRegistro").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#textoRegistro").style.opacity = 0.3;
});
document.querySelector("#ingresoHover").addEventListener("mouseover", form =>{
    document.querySelector("#ingresoHover").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#ingresoHover").style.opacity = 1;
    document.querySelector(".textoIngreso").style.transition = "opacity "+ 0.7+"s";
    document.querySelector(".textoIngreso").style.opacity = 0;
    document.querySelector(".formulario1").style.transition = "opacity "+ 0.7+"s";
    document.querySelector(".formulario1").style.opacity = 0;
    document.querySelector("#textoRegistro").style.display = "flex";
    document.querySelector("#textoRegistro").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#textoRegistro").style.opacity = 0.3;
});
document.querySelector("#ingresoHover").addEventListener("mouseout", form =>{
    document.querySelector("#ingresoHover").style.transition = "opacity "+ 0.7+"s";
    document.querySelector("#ingresoHover").style.opacity = 0;
    document.querySelector(".textoIngreso").style.transition = "opacity "+ 0.7+"s";
    document.querySelector(".textoIngreso").style.opacity = 0.3;
});

// Función que permite validar el formulario de registro al hacer clic en el botón "registrarse"
form.addEventListener("click", e =>{
    // En el IF se indicará el codigo que se ejecutará cuando se de clic en el botón "registrarse"

    console.log("fecha"+fechaNacimiento.value);
        if (nombre.value==null|| nombre.value=="" || !/^[a-zA-Z\s]*$/.test(nombre.value)){
           nombre.classList.add("inputError");
           i++;
        } else {
            nombre.classList.remove("inputError");
        } 
        if (apellido.value==null|| apellido.value=="" || !/^[a-zA-Z\s]*$/.test(apellido.value)){
            apellido.classList.add("inputError");
            i++;
        } else {
            apellido.classList.remove("inputError");
        } 
        if (correoElectronico.value==null|| correoElectronico.value==""){
            correoElectronico.classList.add("inputError");
            i++;
        } else {
            correoElectronico.classList.remove("inputError");
        } if (contrasena.value==null|| contrasena.value==""){
            contrasena.classList.add("inputError");
            i++;
        } else {
            contrasena.classList.remove("inputError");
        } 
        if (confirmarContrasena.value==null|| confirmarContrasena.value=="" || contrasena.value != confirmarContrasena.value){
            confirmarContrasena.classList.add("inputError");
            i++;
        } else {
            confirmarContrasena.classList.remove("inputError");
        } 
        if (fechaNacimiento.value==null|| fechaNacimiento.value=="" || fechaNacimiento.value >= fecha){
            fechaNacimiento.classList.add("inputError");
            i++;
        } else {
            fechaNacimiento.classList.remove("inputError");
        } 
        if(e.target.id=="btnRegistro"){
            if (!terminos.checked) { 
                alert("Para poder registrarse, debe aceptar nuestros terminos y condiciones");
                i++;
            }
        } else { // en caso de que todos los datos sean ingresados correctamente, se cumplirá éste código
            i=0;
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("apellido", apellido.value);
            localStorage.setItem("correoElectronico", correoElectronico.value);
            localStorage.setItem("contrasena" , contrasena.value );
            localStorage.setItem("fechaNacimiento", fechaNacimiento.value);
        }
        //contador de errores, si es diferente a cero, desactiva la función del boton "submit".
        if (i != 0) {
            e.preventDefault();
        }

})


// /VALIDACIÓN FORMULARIO REGISTRO

// VALIDACIÓN FORMULARIO INGRESO
const correoElectronico2 = document.querySelector("#correoElectronico2")
const contrasena2= document.querySelector("#contrasena2")
const btnIngreso= document.querySelector("#btnIngreso")
const formulario= document.querySelector("#formIngreso")
console.log(localStorage.getItem("correoElectronico"))

// Función que permite validar el formulario de registro al hacer clic en el botón "ingreso"
formulario.addEventListener( "click", e => {
    console.log(correoElectronico2.value);
    if(e.target.id=="btnIngreso"){
        if(correoElectronico2.value == "" || correoElectronico2.value == null || localStorage.getItem("correoElectronico")!=correoElectronico2.value  ) {
            correoElectronico2.classList.add("inputError");
            console.log("hola");
            i++;
        } else if (contrasena2.value == "" || contrasena2.value == null ||localStorage.getItem("contrasena")!=contrasena2.value ) {
            contrasena2.classList.add("inputError");
            i++;
        } else { // en caso de que todos los datos sean ingresados correctamente, se cumplirá éste código
            i=0;
            correoElectronico2.classList.remove("inputError");
            contrasena2.classList.remove("inputError");
        } 
        if (i != 0) {
            e.preventDefault();
        }
    }

    if(e.target.id=="contrasenaOlvidada") {
        alert("Hemos enviado un Email a su correo electrónico")
    }
});
// VALIDACIÓN FORMULARIO INGRESO