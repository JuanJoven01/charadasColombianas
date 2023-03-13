
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
  location.href = "/SRC/game.html"
  function wordSelect() {
    const arrayWords = ['No me abra los ojos que no le voy a echar gotas, Duerme más que un gato con anemia, Mugre que no mata engorda',
    'Tengo un filo que si me agacho me corto', '¿Usted qué come que adivina?', 'El que tiene tienda que la atienda', 'Le cuento el milagro pero no el santo',
    'Son como uña y mugre', 'Es más feo que carro visto por debajo',  'Colgar los guayos', '¡Se nos creció el enano!', 'Habla hasta por los codos'
  ];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function festereotipos(event) 
{
  location.href = "/SRC/game.html"

  function wordSelect() {
    const arrayWords = ['Rolo, Caleño, Cucuteño, Paisa, Pastuso, Costeño',
    'Alvaro Uribe, Gustavo Petro, Juan Manuel Santos, Miguel Polo Polo, Paloma Valencia, German Vargas Lleras, Sergio Fajardo',
    'Maria Fernanda Cabal',
    'Gomelo, Ñero, izquierdoso, Arribista'];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function ffarandula(event) 
{
  location.href = "/SRC/game.html"
  
  function wordSelect() {
    const arrayWords = ['Maluma, Shakira, Juanes, Diomedes Diaz, Betty la fea, Pitbull, Daddy Yankee, Reykon, Nanpa Basico, Padres e hijos',
    'Rebelde, Gata salvaje, ', ];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}

function finfancia(event) 
{
  location.href = "/SRC/game.html"
  
  function wordSelect() {
    const arrayWords = ['Mandy y el Señor Bigotes, La princesa y el sapo, 101 Dalmatas, ArtAttack, Terminator, Heladeria Kreisel Supra',
  ''];
    return arrayWords
  }
  localStorage.setItem('wordsGame', wordSelect())
}






