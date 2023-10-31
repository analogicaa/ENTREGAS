window.onload = function () {
  // CAPTURA DE ELEMENTOS
  var cat1 = document.getElementById("gato1");
  var cat2 = document.getElementById("gato2");
  var btnComenzar = document.getElementById("comenzar");
  var btnEmpate = document.getElementById("empate");
  var btnCorrer = document.getElementById("correr");
  var btnSTOP = document.getElementById("stop");

  // DEFINICIÓN E INICIALIZACIÓN DE VARIABLES
  var posCat1 = 0;
  var posCat2 = 0;
  var anchoCat = cat1.width;
  var anchoVen = window.innerWidth;
  var temp1, temp2;

  // FUNCIÓN QUE POSICIONA A INICIO DE LÍNEA
  var posIni = () => {
    cat1.style.left = "0px";
    cat2.style.left = "0px";
  };

  // FUNCIÓN QUE DESACTIVA BOTONES
  var offBtn = () => {
    btnCorrer.disabled = true;
    btnEmpate.disabled = true;
  };

  // FUNCIÓN QUE ACTIVA BOTONES
  var onBtn = () => {
    btnCorrer.disabled = false;
    btnEmpate.disabled = false;
  };

  // FUNCIÓN QUE DETIENE TEMPORIZADORES
  var offTemp = () => {
    clearInterval(temp1);
    clearInterval(temp2);
  };

  // FUNCIÓN QUE MUEVE AL EMPATE
  var uniforme = () => {
    posCat1 += 50;
    posCat2 += 50;
    cat1.style.left = `${posCat1}px`;
    cat2.style.left = `${posCat2}px`;

    /*Belen. Añado este codigo*/
    if (posCat1 >= anchoVen - anchoCat) {
      posCat1 = 0;
      posCat2 = 0;
    }
  };

  // FUNCIÓN QUE MUEVE UNO MÁS RÁPIDO QUE OTRO
  var noUniforme = () => {
    posCat1 += 50;
    posCat2 += 100;
    cat1.style.left = `${posCat1}px`;
    cat2.style.left = `${posCat2}px`;

    /*Belen. Añado este codigo*/
    if (posCat1 >= anchoVen - anchoCat) {
      posCat1 = 0;
    }
    if (posCat2 >= anchoVen - anchoCat) {
      posCat2 = 0;
    }
  };

  // BOTÓN COMENZAR - coloca los michis en el punto de partida
  var comenzar = () => {
    offTemp();
    posIni();
    onBtn();
  };
  btnComenzar.addEventListener("click", comenzar);

  // BOTÓN EMPATE - los dos michis corren a la misma velocidad
  var empatar = () => {
    offBtn();

    /*Belen. comento este codigo*/
    /* var mov = () => {
      posCat2 >= anchoVen - anchoCat ? comenzar() : uniforme();
    };*/
    // posCat1 = 0;
    // posCat2 = 0;
    //temp1 = setInterval(mov, 80);
    temp1 = setInterval(uniforme, 80); // Belen
  };
  btnEmpate.addEventListener("click", empatar);
  // fin de EMPATE

  // BOTÓN A CORRER - los dos michis corren cada uno a una velocidad
  var ganar = () => {
    offBtn();
    /*Belen. comento este codigo*/
    /*var mov2 = () => {
      posCat2 >= anchoVen - anchoCat ? comenzar() : noUniforme();
    };*/
    //posCat1 = 0;
    //posCat2 = 0;
    temp2 = setInterval(noUniforme, 80); // Belen
  };
  btnCorrer.addEventListener("click", ganar);
  // fin de A CORRER

  // BOTÓN STOP - se detiene la carrera
  btnSTOP.addEventListener("click", offTemp); // fin de STOP
}; // fin de window.onload

/*
Muy bien Ana,
Solo te he comentado algo de código que te sobraba y te estaba complicando en empatar y ganar.
Te lo he cambiado para que los  setInterval llame directamente a uniforme y noUniforme, que son 
realmente las funciones que movian a las imagenes.
Te faltaba también poner que cuando quede poco para el final (la anchura de la pagina - anchura de la imagen),
las posiciones las ponga a 0 para que comiencen a la izquierda de la pantalla.
*/
