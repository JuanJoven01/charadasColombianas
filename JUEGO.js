// get element and event 

let writeCorrect = document.getElementById("correcto");
writeCorrect.addEventListener("click", nextDicho);
writeCorrect.addEventListener("click", fcountCorrect);
writeCorrect.addEventListener("click", fcountResult);

let writeIncorrect = document.getElementById("incorrecto");
writeIncorrect.addEventListener("click", nextDicho);
writeIncorrect.addEventListener("click", fcountIncorrect);
writeIncorrect.addEventListener("click", fcountResult);

let wordSelect = document.getElementById("modificable")

let getCountCorrect = document.getElementById("corr");

let getCountIncorrect = document.getElementById("inco");

let getCountResult = document.getElementById("resultado");

let getCountTime = document.getElementById("temporizador");

let countCorrect = 0;

let countIncorrect = 0;

let countResult;

let seconds = 10;

// Constantes para tipo de charada
const arrayDichos = ['sapo', 'gonorrea', 'hp', 'marica'];
const arrayEstereotipos = ['rolo', 'caleno', 'cucuteno', 'paisa'];
const arrayFarandula = ['maluma', 'shakira', 'diomedes', 'juanes'];
const arrayInfancia = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];

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
        let y = seleccionarDichos(arrayDichos)
        wordSelect.innerHTML = y
      }     
}

// Contador de eventos correctos e incorrectos

function fcountCorrect() 
{
  sumaContador = countCorrect++;  
  getCountCorrect.innerHTML = sumaContador + 1;
}

function fcountIncorrect() 
{
  restaContador = countIncorrect++;  
  getCountIncorrect.innerHTML = restaContador + 1;
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
  getCountResult.innerHTML = countResult;
}

let temporizador = 
setInterval
(
  function timer() 
  {
  seconds--;
  getCountTime.innerHTML = seconds;
  console.log(seconds);
  if (seconds === 0) 
    {
    clearInterval(temporizador);
    console.log("Tiempo finalizado");
    }
  }, 1000
);


