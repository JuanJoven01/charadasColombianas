let inicio = document.getElementById('mainmenu');
inicio.addEventListener('click', fmainMenu)

const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
const resultAll = localStorage.getItem('resultAll');
const arrayResult = resultAll.split(',')

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
// redirigir
function fmainMenu() 
{
  location.href = '/SRC/main_menu.html'
}