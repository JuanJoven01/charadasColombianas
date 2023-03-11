
// Get element
let wordSelect = document.getElementById("modificable");
let getCountCorrect = document.getElementById("corr");
let getCountIncorrect = document.getElementById("inco");
let getCountResult = document.getElementById("resultado");
let getCountTime = document.getElementById("temporizador");
let getTimeCount = document.getElementById('tiempojuego')

// Variables
let writeCorrect = document.getElementById("correcto");
let writeIncorrect = document.getElementById("incorrecto");
const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
let scoreResult = 0;
let countCorrect = 0;
let countIncorrect = 0;
let seconds = 5;
let playTime = 60;
let i = 0;
let resultPlayers = []
let booleanLaunch = true
console.log(arrayNames)

// Constantes para tipo de charada
const arrayDichos = ['sapo', 'gonorrea', 'hp', 'marica'];
const arrayEstereotipos = ['rolo', 'caleno', 'cucuteno', 'paisa'];
const arrayFarandula = ['maluma', 'shakira', 'diomedes', 'juanes'];
const arrayInfancia = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];

function fhtmlCorrect () {getCountCorrect.innerHTML = 'Correctas: ' + fcountCorrect()};
function fhtmlIncorrects () {getCountIncorrect.innerHTML = 'Incorretas: ' + fcountIncorrect()};
function fhtmlResult () {getCountResult.innerHTML = 'Puntos ronda: ' + fcountResult()};

// boolean
function booleanLauncher() {
  if (seconds == 0) {
    booleanLaunch = true
    return booleanLaunch
  }
  else {
    booleanLaunch = false
    return booleanLaunch
  }
}

// Function total
function total() {
    seconds = 5;
    playTime = 10; 
    scoreResult = 0;
    countCorrect = 0;
    countIncorrect = 0;
    fhtmlCorrect();
    fhtmlIncorrects();
    fhtmlResult();
    waitexcecute(); 
    if ( resultPlayers.length == arrayNames.length) {
      fresultados();
    } 
}

// function launcher
function launcher()
{ 
  let bool = setInterval (
    function timer() { 
      let booooo = booleanLauncher()
      console.log(booooo)
    if (booooo == true) {  
      writeCorrect.addEventListener("click", nextDicho);
      writeCorrect.addEventListener("click", fhtmlCorrect);
      writeCorrect.addEventListener("click", fhtmlResult);
      
      writeIncorrect.addEventListener("click", nextDicho);
      writeIncorrect.addEventListener("click", fhtmlIncorrects);
      writeIncorrect.addEventListener("click", fhtmlResult);   
   } 
   else {
    writeCorrect.removeEventListener("click", nextDicho);
    writeCorrect.removeEventListener("click", fhtmlCorrect);
    writeCorrect.removeEventListener("click", fhtmlResult);
    
    writeIncorrect.removeEventListener("click", nextDicho);
    writeIncorrect.removeEventListener("click", fhtmlIncorrects);
    writeIncorrect.removeEventListener("click", fhtmlResult);   
   }
  },200
  )
  return bool;
}

// Funciones para event
function nextDicho() 
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

// Funciones para el arrey 
function seleccionarDichos(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];   
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
    nextDicho(); 
    waitResultados();
  }
}

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
    playcount();
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

// Funcion waitResultados

const waitResultados = () => 
{

    if (playTime > 0) {
      setTimeout(waitResultados, 1000); 
      return;
    }
    else if (i < arrayNames.length) { 
      resultPlayers.push(fcountResult());
      i++;
      total();
      TimerCount();
      localStorage.setItem('resultAll',resultPlayers)
    }   
}

total();
launcher();
TimerCount();

// Funciones para redirigir

function fresultados() 
{
  location.href = "/RESULTADOS.html"
}

