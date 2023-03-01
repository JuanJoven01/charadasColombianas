
let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", fmainMenu);

// Funciones para redirigir
function fmainMenu(event) 
{
  location.href = '/MAINMENU.html'
}

function addInput() {
  var inputContainer = document.getElementById("inputContainer");
  var newInput = document.createElement("input");
  newInput.type = "text";
  inputContainer.appendChild(newInput);
}
