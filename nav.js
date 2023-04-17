//movimiento del header hacia abajito//
  
window.addEventListener("scroll", function(){
  var header = document.getElementById("header")
  if (window.scrollY>0) {
      header.style.backgroundColor="#191919";
  }else{
      header.style.backgroundColor="transparent";
  }
})

//Esto es para cuando cargue el documento, lo que suceda//

$(document).ready(() => {
  $("#elemento").hide();
  $("#elemento2").hide();
  $("#elemento3").hide();
  $("#formcito").hide();
  $("#videito").hide();
})

//comenzar experiencia boton del video//
$(document).ready(function(){
  $("#primerBoton").click(function(){
    $("#texto-encabezado1").fadeToggle();
    $("#texto-d-encabezado1").fadeToggle();
    $("#parrafitoo").fadeToggle();
    $("#videito").fadeToggle();
    
    
  })
})

//Accion de mostrar texto al poner el mouse encima de las cartas! primera carta//
$(document).ready(function(){
    $("#imagencita").mouseenter(function(){
      $("#imagencita").toggle();
      $("#textorandom1").toggle();
      $("#elemento").show();
    });
    $("#imagencita").mouseleave(function(){
      $("#imagencita").show();
      $("#textorandom1").show();
      $("#elemento").hide();
    });
  });

  //segunda carta//
$(document).ready(function(){
    $("#imagencita2").mouseenter(function(){
      $("#imagencita2").toggle();
      $("#textorandom2").toggle();
      $("#elemento2").show();
    });
    $("#imagencita2").mouseleave(function(){
      $("#imagencita2").show();
      $("#textorandom2").show();
      $("#elemento2").hide();
    });
  });

//tercer carta//
$(document).ready(function(){
    $("#imagencita3").mouseenter(function(){
      $("#imagencita3").hide();
      $("#textorandom3").hide();
      $("#elemento3").show();
    });
    $("#imagencita3").mouseleave(function(){
      $("#imagencita3").show();
      $("#textorandom3").show();
      $("#elemento3").hide();
    });
  });

  


//aca es la accion del boton que despliega el 2do formcito//

$("#mostrarForm").click(function(){
  $("#formcito").toggle();



})

//el popup cuando se envia formularios!//

let miSubmit= document.getElementById("submit");
miSubmit.addEventListener("click",popup);

function popup (){
  alert("Su consulta fue enviada. Nos podremos en contacto en las próximas 48hs.");
}

let miSubmit2= document.getElementById("submit2");
miSubmit2.addEventListener("click",popup);

function popup (){
  alert("Su consulta fue enviada. Nos podremos en contacto en las próximas 48hs.");
}



