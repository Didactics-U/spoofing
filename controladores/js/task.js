
$(document).ready(function (){
   $(".container_12").fadeIn(200);

});


function toglear (obj) {

  $("#"+obj).slideToggle("fast");
}

function submitear(fomr){
     fomr.submit();
}

function foco(ob){
    ob.blur();
}
function borrar(ob){
    ob.value="";
}

function cerrardialog(dialog){
     $('#'+dialog).dialog("close");

}
