$("elemento").hide();
$("elemento2").hide();
$("elemento3").hide();
// probando cositas//
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

  //el segundo//
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

  //el tercero//
  // probando cositas//
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

  //caca//
 


  //movimiento del header//
  
  window.addEventListener("scroll", function(){
    var header = document.getElementById("header")
    if (window.scrollY>0) {
        header.style.backgroundColor="#191919";
    }else{
        header.style.backgroundColor="transparent";
    }
})