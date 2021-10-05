document.addEventListener("DOMContentLoaded", function(event) {
      if(!localStorage.getItem("presentacion")){
        document.getElementById("presentacion-modal").style.display = "block"
      }
  });

  function cerrarmodal(){
    document.getElementById("presentacion-modal").style.display = "none"
  }

  function cerraryguardar(){
    cerrarmodal();
    localStorage.setItem("presentacion","1")

  }