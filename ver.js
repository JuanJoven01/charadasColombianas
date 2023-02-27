// envuelve el código en una función
function setup() {
    let writeCorrect = document.getElementById("correcto");
    
    // agrega el booleano que se inicializa en `false`
    let iniciado = false;
    
    // agrega los manejadores de eventos a `iniciar`
    let launch = document.getElementById("iniciar");
    launch.addEventListener("click", TimerCount);
    launch.addEventListener("click", nextDicho);
    launch.addEventListener("click", function() {
      iniciado = true;
    });
    
    // agrega un nuevo manejador de eventos a `correcto` que llame a la función envuelta solo si el booleano está establecido en `true`
    writeCorrect.addEventListener("click", function() {
      if (iniciado) {
        nextDicho();
        fcountCorrect();
        fcountResult();
      }
    });
  }
  
  // llama a la función envuelta después de que se cargue la página

  