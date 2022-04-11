function saludar() {
  let nodoInput = document.getElementById("txtNombre");
  let nombre = nodoInput.value;
  alert("hola " + nombre);
}

let botonSaludar = document.getElementById("clickear");
botonSaludar.addEventListener("click", saludar);
