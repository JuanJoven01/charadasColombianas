import { numberOfPlayer } from "./SHARED.js";
import { forNumberPlayers } from "./SHARED.js";

let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", (fplayers, fmainMenu));

let jugador1 = document.getElementById('Player1')
jugador1.value = 'jugador 1'

let jugadoresButton = document.getElementById('addInputButton');
jugadoresButton.addEventListener('click', numberOfPlayer)


// Funciones para redirigir

function fmainMenu() 
{
  location.href = '/MAINMENU.html'
}

numberOfPlayer();

function fplayers() {
  forNumberPlayers()
}