
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
let seconds = 2;
let playTime = 60;
let launch = document.getElementById("modificable");
let writeCorrect = document.getElementById("correcto");
let writeIncorrect = document.getElementById("incorrecto");
const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
console.log(arrayNames)

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
    seleccionarDichos(arrayDichos)
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
{
  writeCorrect.addEventListener("click", nextDicho);
  writeCorrect.addEventListener("click", fconsoleCorrect);
  writeCorrect.addEventListener("click", fconsoleResult);
  
  writeIncorrect.addEventListener("click", nextDicho);
  writeIncorrect.addEventListener("click", fconsoleIncorrects);
  writeIncorrect.addEventListener("click", fconsoleResult);

  function fconsoleCorrect () {console.log('sum ' + fcountCorrect())};
  function fconsoleIncorrects () {console.log('rest ' + fcountIncorrect())};
  function fconsoleResult () {console.log('result ' + fcountResult())};
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
  launcher()
  nextDicho();  
  waitResultados();
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

// Funciones para redirigir

function fresultados() 
{
  location.href = "/RESULTADOS.html"
}
