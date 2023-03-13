let numberPlayer = 1;

let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", (forNumberPlayers, fmainMenu));

let jugador1 = document.getElementById('Player1')
jugador1.value = 'Jugador 1'

let jugadoresButton = document.getElementById('addInputButton');
jugadoresButton.addEventListener('click', numberOfPlayer)

//Function nuevo jugador
function addInput() {
  let inputContainer = document.getElementById("inputContainer");
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.value = 'Jugador ' + numberPlayer
  newInput.className = 'newPlayer';
  newInput.id = 'Player' + numberPlayer;
  inputContainer.appendChild(newInput);
}

// Function limite jugadores
function numberOfPlayer(event) {
  if (numberPlayer < 8) {

    numberPlayer++;
    addInput();
  }
  } 
 
// Function nombre predeterminado
 function forNumberPlayers() 
{
  switch (numberPlayer) {

      case 1: 
      function players1() {
        let player1 = document.getElementById("Player1").value;
    
        return [player1];
      }
      return players1();

      case 2:
        function players2() {
          let player1 = document.getElementById("Player1","Player2").value;
          let player2 = document.getElementById("Player2").value;

          return [player1, player2]     
        }
      players2();
      return players2();
 
       case 3:
        function players3() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          
          return [player1, player2, player3]
        }
      return players3();
   
      case 4:
        function players4() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          return [player1, player2, player3, player4]
        }
      return players4();

      case 5:
        function players5() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
        
          return [player1, player2, player3, player4, player5]
        }
      return players5();
        
      case 6:
        function players6() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
          let player6 = document.getElementById("Player6").value;
        
          return [player1, player2, player3, player4, player5, player6]
        }
      return players6();

      case 7:
        function players7() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
          let player6 = document.getElementById("Player6").value;
          let player7 = document.getElementById("Player7").value;
                        
          return [player1, player2, player3, player4, player5, player6, player7]
        }
      return players7();

      case 8:
        function players8() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
          let player6 = document.getElementById("Player6").value;
          let player7 = document.getElementById("Player7").value;
          let player8 = document.getElementById("Player8").value;
        
          return [player1, player2, player3, player4, player5, player6, player7, player8]
        }        
      return players8();
  
    default:

      break;
}
}

// Funciones para redirigir y guardar localstorage
function fmainMenu() 
{
  localStorage.setItem('localNames',forNumberPlayers())
  location.href = '/SRC/main_menu.html'
}

numberOfPlayer();
