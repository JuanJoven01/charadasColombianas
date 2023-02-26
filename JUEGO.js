let writeCorrect = document.getElementById("correcto");
writeCorrect.addEventListener("click", nextDicho);

let writeIncorrect = document.getElementById("incorrecto");
writeIncorrect.addEventListener("click", nextDicho);

let wordSelect = document.getElementById("modificable")

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

function nextDicho(event) 
{
  if (event.click = true)
      {
        seleccionarDichos(arrayDichos)
        var y = seleccionarDichos(arrayDichos)
        wordSelect.innerHTML = y
      }     
}

