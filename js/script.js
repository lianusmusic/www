var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("partitura");
function init(partitura){
  fetch('/'+partitura)
  .then(response => response.text())
  .then((text) => {
    osmd.load(text);
    if(localStorage.getItem("instrumento")){
      var j = parseInt(localStorage.getItem("instrumento")) 
      $("input.form-check-input").removeAttr("checked")
      $("input.form-check-input[value="+j+"]").attr("checked",true)
    }
    else{
      var j = 0
    }
    for (var i=0; i<4; i++) {
      if(i == j){
          osmd.sheet.Instruments[i].Visible = true; 
     }
      else{
           osmd.sheet.Instruments[i].Visible = false; 
       }
    }        
    osmd.zoom = 1.2;
    osmd.render();
  }
  )
  .then(() => {
      $("#loading").remove();
    }  
  )
}

$(document).on("click","#controles",function(){
    $("#fchecks").slideToggle("slow");
})

function cambiarkeys(){
    var cboxes = document.getElementsByName('keys[]');
    var len = cboxes.length;    
    for (var i=0; i<len; i++) {
       if(cboxes[i].checked){
            osmd.sheet.Instruments[i].Visible = true; 
            localStorage.setItem("instrumento",cboxes[i].value)
       }
       else{
            osmd.sheet.Instruments[i].Visible = false; 
       }
    }
    osmd.render();   
}

// $(document).on("click","#controles",function(){
//   $("#fchecks").slideToggle("slow");
// })

$(document).on("change","#zoom",function(){
  var z = Number($(this).val());
  osmd.zoom = z;
  osmd.render();
})