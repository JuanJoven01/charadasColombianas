
// Get element
let wordSelect = document.getElementById("modificable");
let getCountCorrect = document.getElementById("corr");
let getCountIncorrect = document.getElementById("inco");
let getCountResult = document.getElementById("resultado");
let getCountTime = document.getElementById("temporizador");
let getTimeCount = document.getElementById('tiempojuego')

// Variables
let countCorrect = 1;
let countIncorrect = 1;
let seconds = 3;
let playTime = 3;
let launch = document.getElementById("modificable");
let writeCorrect = document.getElementById("correcto");
let writeIncorrect = document.getElementById("incorrecto");
const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
const scoreResult = 1;

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
    let words = seleccionarDichos(arrayDichos)
    wordSelect.innerHTML = words
  }    
}

// Contador de eventos correctos e incorrectos
function fcountCorrect() 
{
  let sumaContador = countCorrect++; 
  return sumaContador 
}

function fcountIncorrect() 
{
  let restaContador = countIncorrect++;  
  return restaContador
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
  return countResult
}

  // function launcher
function launcher()
{  writeCorrect.addEventListener("click", nextDicho);
  writeCorrect.addEventListener("click", fhtmlCorrect);
  writeCorrect.addEventListener("click", fhtmlResult);
  
  writeIncorrect.addEventListener("click", nextDicho);
  writeIncorrect.addEventListener("click", fhtmlIncorrects);
  writeIncorrect.addEventListener("click", fhtmlResult);

  function fhtmlCorrect () {getCountCorrect.innerHTML = 'Correctas: ' + fcountCorrect()};
  function fhtmlIncorrects () {getCountIncorrect.innerHTML = 'Incorretas: ' + fcountIncorrect()};
  function fhtmlResult () {getCountResult.innerHTML = 'Puntos ronda: ' + fcountResult()};
  nextDicho();  
  playcount();
}

// Funcion waitexcecute
const waitexcecute = () => 
{
  if (seconds > 0) {
    setTimeout(waitexcecute, 1000); 
    return;
  }
  else
  {  
  launcher();
  waitResultados();
  }

}

// Funcion waitResultados
const waitResultados = () => 
{
  if (playTime > 0) {
    setTimeout(waitResultados, 1000); 
    return;
  }
  else
  {  
    console.log('siguiente')
  }
}
waitexcecute();

// Funciones para redirigir

function fresultados() 
{
  location.href = "/RESULTADOS.html"
}

for (let i = 0; i < arrayNames.length; i++) {
  console.log(i)
}

switch (arrayNames.length) {
  case 8:
    console.log('asddsg')
    break;

  case 7:
    console.log('asdhfkjfhgd')
    break;

  case 6:
    console.log('asdsdhadf')
    break;

  case 5:
    console.log('alhjllghjsd')
    break;

  case 4:
    console.log('asewteweytertd')
    break;

  case 3:
    console.log('asdfxghgmcjd')
    break;

  case 2:
    console.log('aszcxv bx dhd')
    break;
  default:
    break;
}