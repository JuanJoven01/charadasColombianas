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

