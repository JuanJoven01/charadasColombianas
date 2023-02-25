// elementById para redirigir
let dichos = document.getElementById("dichos");
dichos.addEventListener("click", fdichos);

let estereotipos = document.getElementById("estereotipos");
estereotipos.addEventListener("click", festereotipos);

let farandula = document.getElementById("farandula");
farandula.addEventListener("click", ffarandula);

let infancia = document.getElementById("infancia");
infancia.addEventListener("click", finfancia); 

// Funciones para redirigir
function fdichos(event) 
{
  location.href = "/DICHOS.HTML"
}

function festereotipos(event) 
{
  location.href = "/ESTEREOTIPOS.HTML"
}

function ffarandula(event) 
{
  location.href = "/FARANDULA.HTML"
}

function finfancia(event) 
{
  location.href = "/INFANCIA.HTML"
}

// Constantes para tipo de charada
const arrayDichos = ['sapo', 'gonorrea', 'hp', 'marica'];
const arrayEstereotipos = ['rolo', 'caleno', 'cucuteno', 'paisa'];
const arrayFarandula = ['maluma', 'shakira', 'diomedes', 'juanes'];
const arrayInfancia = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];

// Funciones para el arrey 
function seleccionarDichos(array) 
{
  const indiceAlAzar = Math.floor(Math.random() * array.length);
  return array[indiceAlAzar];
}

function seleccionarEstereotipos(array) 
{
  const indiceAlAzar = Math.floor(Math.random() * array.length);
  return array[indiceAlAzar];
}

function seleccionarFarandula(array) 
{
  const indiceAlAzar = Math.floor(Math.random() * array.length);
  return array[indiceAlAzar];
}

function seleccionarInfancia(array) 
{
  const indiceAlAzar = Math.floor(Math.random() * array.length);
  return array[indiceAlAzar];
}

// Console para ver funcion
let adivinarDichos = seleccionarDichos(arrayDichos)+ ", " +
seleccionarEstereotipos(arrayEstereotipos)+ ", " +
seleccionarFarandula(arrayFarandula)+ ", " +
seleccionarInfancia(arrayInfancia);
console.log(adivinarDichos);