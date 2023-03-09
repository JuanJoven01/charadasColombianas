
// Get element
let wordSelect = document.getElementById("modificable");
let getCountCorrect = document.getElementById("corr");
let getCountIncorrect = 
document.getElementById("inco");
let getCountResult = document.getElementById("resultado");
let getCountTime = document.getElementById("temporizador");
let getTimeCount = document.getElementById('tiempojuego')

// Variables
let countCorrect = 0;
let countIncorrect = 0;
let countResult;
let seconds = 5;
let playTime = 60;
let launch = document.getElementById("modificable");
let writeCorrect = document.getElementById("correcto");
let writeIncorrect = document.getElementById("incorrecto");

// Event listener launch

launch.addEventListener("click", (TimerCount));

// Constantes para tipo de charada
const arrayDichos = ['sapo', 'gonorrea', 'hp', 'marica'];
const arrayEstereotipos = ['rolo', 'caleno', 'cucuteno', 'paisa'];
const arrayFarandula = ['maluma', 'shakira', 'diomedes', 'juanes'];
const arrayInfancia = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];

// funcion de contador
function TimerCount()
{
  let temporizador = setInterval
  (
    function timer() 
    {
    seconds--;
    getCountTime.innerHTML = 'Tiempo para inciar: ' + seconds;
    if (seconds == 0) 
    {
    clearInterval(temporizador);
    }
    if (seconds < 0) 
    {
      seconds = 1;
    }
    }, 1000
  );
}

function playcount()
{
  let temporizador = setInterval
  (
    function timer() 
    {
    playTime--;
    getTimeCount.innerHTML = 'Tiempo de ronda: ' + playTime;
      if (playTime == 0) 
      {
      clearInterval(temporizador);
      }
    }, 1000
  );
}

// Funciones para redirigir
function fresultados() 
{
  location.href = "/RESULTADOS.html"
}

// Funciones para el arrey 
function seleccionarDichos(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];   
}

// Funciones para event
function nextDicho(event) 
{
  if (event = true)
  {
    seleccionarDichos(arrayDichos)
    let words = seleccionarDichos(arrayDichos)
    wordSelect.innerHTML = words
  }    
}

  // function launcher
function launcher()
{
  writeCorrect.addEventListener("click", (nextDicho));
  writeCorrect.addEventListener("click", fcountCorrect);
  writeCorrect.addEventListener("click", fcountResult);
  
  writeIncorrect.addEventListener("click", nextDicho);
  writeIncorrect.addEventListener("click", fcountIncorrect);
  writeIncorrect.addEventListener("click", fcountResult);
  
  // Contador de eventos correctos e incorrectos
  function fcountCorrect() 
  {
    let sumaContador = countCorrect++;  
    getCountCorrect.innerHTML = 'Correctas: ' +(sumaContador + 1) ;
  }
  
  function fcountIncorrect() 
  {
    let restaContador = countIncorrect++;  
    getCountIncorrect.innerHTML = 'Incorrectas: ' + (restaContador + 1) ;
  }
  
  function fcountResult()
  {
    let more = countCorrect;
    let less = countIncorrect;
    let countResult = more - less
    if (countResult < 0)
    {
      countResult = 0
    }
    getCountResult.innerHTML = 'Puntos ronda: ' + countResult;
  }
}

// Funcion waitexcecute
const waitexcecute = () => 
{
  if (seconds > 0) {
    setTimeout(waitexcecute, 1000); // espera 1 segundo y vuelve a comprobar
    return;
  }
  else
  {  
  playcount();
  launcher();
  nextDicho();  
  waitResultados();
  console.log(localStorage.getItem('localNames')) 
  }

}

// Funcion waitexcecute
const waitResultados = () => 
{
  if (playTime > 0) {
    setTimeout(waitResultados, 1000); // espera 1 segundo y vuelve a comprobar
    return;
  }
  else
  {  
    fresultados();
  }

}
waitexcecute();



