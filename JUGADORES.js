
let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", players);

let numberPlayer = 2;

// Funciones para redirigir
/*
function fmainMenu(event) 
{
  location.href = '/RESULTADOS.html'
}
*/

function numberOfPlayer(event) {
  numberPlayer++;
  }

function addInput() {

  let inputContainer = document.getElementById("inputContainer");
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = 'newPlayer';
  newInput.id = 'Player' + numberPlayer;
  inputContainer.appendChild(newInput);
  console.log(newInput)
}

function addPlayer() {
  if (numberPlayer <= 8) {
    addInput();
  }
}

function players() {
  let player1 = document.getElementById("Player1").value;
  let player2 = document.getElementById("Player2").value;
  let player3 = document.getElementById("Player3").value;
  let player4 = document.getElementById("Player4").value;
  let player5 = document.getElementById("Player5").value;
  let player6 = document.getElementById("Player6").value;
  let player7 = document.getElementById("Player7").value;
  let player8 = document.getElementById("Player8").value;

  console.log(player1, player2, player3, player4, player5, player6, player7, player8);
}
