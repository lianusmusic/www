var speed = document.getElementsByClassName('velocidad');
  for(var i = 0; i < speed.length; i++) {
    speed[i].addEventListener('change', function () {
      var id = this.getAttribute("data-id")
      document.getElementById(id).playbackRate = this.value;
    });
  }