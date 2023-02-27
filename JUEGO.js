// get element and event 

let writeCorrect = document.getElementById("correcto");
writeCorrect.addEventListener("click", nextDicho);
writeCorrect.addEventListener("click", fcountCorrect);

let writeIncorrect = document.getElementById("incorrecto");
writeIncorrect.addEventListener("click", nextDicho);
writeIncorrect.addEventListener("click", fcountIncorrect);

let wordSelect = document.getElementById("modificable")

let getcountCorrect = document.getElementById("corr");


let getcountIncorrect = document.getElementById("inco");

let countCorrect = 1;

let countIncorrect = 1;

let countResult;

let more;

let less;



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
  if (event.click = true)
      {
        seleccionarDichos(arrayDichos)
        let y = seleccionarDichos(arrayDichos)
        wordSelect.innerHTML = y
      }     
}

// Contador de eventos correctos e incorrectos

function fcountCorrect(sumaContador) 
{
  sumaContador = countCorrect++;  
  getcountCorrect.innerHTML = sumaContador;
}

function fcountIncorrect(restaContador) 
{
  restaContador = countIncorrect++;  
  getcountIncorrect.innerHTML = restaContador;
}

function fDifference(sumaContador, restaContador) 
{
  return sumaContador - restaContador;
}
function fcountResult()
{
  let more = sumaContador;
  let less = restaContador;
  let result = fDifference(more, less);
  console.log(result)
}