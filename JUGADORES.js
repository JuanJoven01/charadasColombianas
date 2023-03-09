import { numberOfPlayer } from "./SHARED.js";
import { forNumberPlayers } from "./SHARED.js";

let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", (fplayers, fmainMenu));

let jugador1 = document.getElementById('Player1')
jugador1.value = 'Jugador 1'

let jugadoresButton = document.getElementById('addInputButton');
jugadoresButton.addEventListener('click', numberOfPlayer)


// Funciones para redirigir

function fmainMenu() 
{
  localStorage.setItem('localNames',forNumberPlayers())
  location.href = '/MAINMENU.html'
}


function fplayers() {
  forNumberPlayers()

}

numberOfPlayer();
