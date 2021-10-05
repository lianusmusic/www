// Para 1 solo player x página
var speed = document.getElementById('velocidad');
  speed.addEventListener('change', function () {      
    audio.playbackRate = this.value;
    //clearInterval(intervalo);    
    //intervalo = setInterval(avanzarcursor, velocidad/audio.playbackRate);
  });
  