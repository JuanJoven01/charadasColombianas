
let inicio = document.getElementById('mainmenu');

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

for (let i = 0; i < arrayNames.length; i++) {
  function addInput() {
    let inputContainer = document.getElementById("namesresult");
    let newOutput = document.createElement("output");
    newOutput.type = "text";
    newOutput.value = arrayNames[i] + '= ' + arrayResult[i];
    newOutput.id = 'Player' ;
    inputContainer.appendChild(newOutput);  
}
addInput();
}

