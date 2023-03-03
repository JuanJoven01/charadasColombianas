
let dichos = document.getElementById("mainmenu");
dichos.addEventListener("click", fplayers);

let numberPlayer = 1;

let player1; 
let player2;
let player3; 
let player4; 
let player5; 
let player6;
let player7;
let player8;

// Funciones para redirigir
/*
function fmainMenu(event) 
{
  location.href = '/RESULTADOS.html'
}
*/
function addInput() {

  let inputContainer = document.getElementById("inputContainer");
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = 'newPlayer';
  newInput.id = 'Player' + numberPlayer;
  inputContainer.appendChild(newInput);
}

function numberOfPlayer(event) {
  if (numberPlayer < 8) {

    numberPlayer++;
    addInput();
    console.log(numberPlayer)
  }
  }



function forNumberPlayers() 
{
  switch (numberPlayer) {

      case 1: 
      function players1() {
        let player1 = document.getElementById("Player1").value;
      
        console.log(player1);
      }
      players1();
      break;

      case 2:
        function players2() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
        
          console.log(player1, player2);
        }
      players2();
       break;

       case 3:
        function players3() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          
          console.log(player1, player2, player3);
        }
      players3();
        break;
   
      case 4:
        function players4() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
        
          console.log(player1, player2, player3, player4);
        }
      players4();
      break;

      case 5:
        function players5() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
        
          console.log(player1, player2, player3, player4, player5);
        }
      players5();
      break;
        
      case 6:
        function players6() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
          let player6 = document.getElementById("Player6").value;
        
          console.log(player1, player2, player3, player4, player5, player6);
        }
      players6();
      break;

      case 7:
        function players7() {
          let player1 = document.getElementById("Player1").value;
          let player2 = document.getElementById("Player2").value;
          let player3 = document.getElementById("Player3").value;
          let player4 = document.getElementById("Player4").value;
          let player5 = document.getElementById("Player5").value;
          let player6 = document.getElementById("Player6").value;
          let player7 = document.getElementById("Player7").value;
                        
          console.log(player1, player2, player3, player4, player5, player6, player7);
        }
      players7();
      break;

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
        
          console.log(player1, player2, player3, player4, player5, player6, player7, player8);
        }
        
      players8();
      break;
  
    default:

      break;
}
}

function fplayers() {
  forNumberPlayers();
}

