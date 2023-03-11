
let inicio = document.getElementById('mainmenu');
let ppp = document.getElementById('ppp');
let rrr = document.getElementById('rrr')

inicio.addEventListener('click', fmainMenu)

function fmainMenu() 
{
  location.href = '/JUGADORES.html'
}

const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
console.log(arrayNames)

const resultAll = localStorage.getItem('resultAll');
const arrayResult = resultAll.split(',')
console.log(arrayResult)

const resultForNames = {
    names: arrayNames,
    results: arrayResult
}

ppp.innerHTML = arrayNames;
rrr.innerHTML = arrayResult

console.log(resultForNames)