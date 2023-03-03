
let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", fmainMenu);



let numberPlayer = 2;

// Funciones para redirigir
function fmainMenu(event) 
{
  location.href = '/RESULTADOS.html'
}

function numberOfPlayer(event) {
  numberPlayer++;
  }

function addInput() {
  let inputContainer = document.getElementById("inputContainer");
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = 'newPlayer';
  newInput.id = 'player' + numberPlayer;
  inputContainer.appendChild(newInput);
}
