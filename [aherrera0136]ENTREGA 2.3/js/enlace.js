window.onload = function () {
    // CAPTURA DE ELEMENTOS
    var cat1 = document.getElementById('gato1');
    var cat2 = document.getElementById('gato2');
    var btnComenzar = document.getElementById('comenzar');
    var btnEmpate = document.getElementById('empate');
    var btnCorrer = document.getElementById('correr');
    var btnSTOP = document.getElementById('stop');

    // DEFINICIÓN E INICIALIZACIÓN DE VARIABLES
    var posCat1 = 0;
    var posCat2 = 0;
    var anchoCat = cat1.width;
    var anchoVen = window.innerWidth;
    var temp1, temp2; 
  
    // FUNCIÓN QUE POSICIONA A INICIO DE LÍNEA
    var posIni = () =>{
      cat1.style.left = '0px';
      cat2.style.left = '0px';
    }
  
    // FUNCIÓN QUE DESACTIVA BOTONES
    var offBtn = () =>{
     btnCorrer.disabled = true;
     btnEmpate.disabled = true; 
    }
  
    // FUNCIÓN QUE ACTIVA BOTONES
    var onBtn = () =>{
      btnCorrer.disabled = false;
      btnEmpate.disabled = false; 
     }
  
     // FUNCIÓN QUE DETIENE TEMPORIZADORES
    var offTemp = () =>{
      clearInterval(temp1);
      clearInterval(temp2);
    }

    // FUNCIÓN QUE MUEVE AL EMPATE
    var uniforme = () => {
        posCat1 += 10 ;
        posCat2 += 10;
        cat1.style.left = `${posCat1}px`;
        cat2.style.left = `${posCat2}px`;
    }

    // FUNCIÓN QUE MUEVE UNO MÁS RÁPIDO QUE OTRO
    var noUniforme = () =>{
        posCat1 += 6;
        posCat2 += 10;
        cat1.style.left = `${posCat1}px`;
        cat2.style.left = `${posCat2}px`;
    }
     
    // BOTÓN COMENZAR - coloca los michis en el punto de partida
    var comenzar = () =>{
      offTemp();
      posIni();
      onBtn();
    }
    btnComenzar.addEventListener('click', comenzar);
  
     // BOTÓN EMPATE - los dos michis corren a la misma velocidad
     var empatar = () =>{
        offBtn();
        var mov = () => { 
         posCat2 >= (anchoVen - anchoCat)? comenzar(): uniforme (); 
        }
        posCat1 = 0;
        posCat2 = 0;
        temp1 = setInterval(mov, 80);
     }
     btnEmpate.addEventListener('click', empatar);
    // fin de EMPATE
   
    // BOTÓN A CORRER - los dos michis corren cada uno a una velocidad
    var ganar = () =>{
      offBtn(); 
      var mov2 = () => {
        posCat2 >= (anchoVen - anchoCat) ? comenzar() : noUniforme(); 
      }
      posCat1 = 0;
      posCat2 = 0;
      temp2 = setInterval(mov2, 80);
    }
    btnCorrer.addEventListener('click', ganar);  
    // fin de A CORRER
  
    // BOTÓN STOP - se detiene la carrera
     btnSTOP.addEventListener('click',offTemp); // fin de STOP
}// fin de window.onload
  