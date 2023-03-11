
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
  function wordSelect() {
    const arrayWords = ['sapo', 'gonorrea', 'hp', 'marica'];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function festereotipos(event) 
{
  location.href = "/DICHOS.HTML"

  function wordSelect() {
    const arrayWords = ['rolo', 'caleno', 'cucuteno', 'paisa'];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function ffarandula(event) 
{
  location.href = "/DICHOS.HTML"
  
  function wordSelect() {
    const arrayWords = ['maluma', 'shakira', 'diomedes', 'juanes'];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function finfancia(event) 
{
  location.href = "/DICHOS.HTML"
  
  function wordSelect() {
    const arrayWords = ['ArtAttack', 'MandySenorbigotes', 'dalmatas', 'princesasapo'];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}






