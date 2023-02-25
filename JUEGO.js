// Constantes para tipo de charada
const arrayDichos = ['sapo', 'gonorrea', 'hp', 'marica'];
const arrayEstereotipos = ['rolo', 'caleno', 'cucuteno', 'paisa'];
const arrayFarandula = ['maluma', 'shakira', 'diomedes', 'juanes'];
const arrayInfancia = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];
/*

// elementById para correcto e incorrecto
let correcto = document.getElementById('correcto')
correcto.addEventListener('click', fcorrecto)


 funciones correcto e incorrecto

function fcorrecto(event) 
{
    const azarIndex = Math.floor(Math.random() * event.length);
    return event[azarIndex];
} 
let solodichos = fcorrecto(arrayDichos);
console.log(solodichos);

*/

// Funciones para el arrey 
function seleccionarDichos(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];
}

function seleccionarEstereotipos(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];
}

function seleccionarFarandula(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];
}

function seleccionarInfancia(array) 
{
  const azarIndex = Math.floor(Math.random() * array.length);
  return array[azarIndex];
}

// Console para ver funcion
let adivinarDichos = seleccionarDichos(arrayDichos)+ ", " +
seleccionarEstereotipos(arrayEstereotipos)+ ", " +
seleccionarFarandula(arrayFarandula)+ ", " +
seleccionarInfancia(arrayInfancia);
console.log(adivinarDichos);
