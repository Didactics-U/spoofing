function validarcliente() 
{
	var cedula = $('#cedula').attr("value");
	var nombre = $('#nombre').attr("value");
    var apellido = $('#apellido').attr("value");
    var telefono = $('#telefono').attr("value");
	var direccion= $('#direccion').attr("value");
	var estado= $('#estado').attr("value");
	var email= $('#email').attr("value");
    if (cedula == 0){
	  
        alert("Debe ingresar un cedula");
	   $('#cedula').focus();
		return false;
    };
    if (nombre == 0){
        alert("Debe ingresar un nombre");
    	   $('#nombre').focus();
        return false;
    };
    if (apellido == 0){
        alert("Debe ingresar una apellido");
        	   $('#apellido').focus();
        return false;
    };
    if (telefono == 0){
        alert("Debe ingresar una telefono");
        $('#telefono').focus();
	    return false;
    };
	if (direccion == 0){
	   alert("Debe ingresar direccion");
	   $('#direccion').focus();
		return false;
    };
	if (estado == 0){
	  
        alert("Debe ingresar un estado");
	   $('#estado').focus();
		return false;
    };
 	if (email == 0){
	  
        alert("Debe ingresar un correo");
	   $('#email').focus();
		return false;
    };
   // alert("Datos completos correctamente");
	//$('#mensaje').html("Datos completos correctamente");
	
	guardardatos();
	
}


function guardardatos(){
		   //alert("para saber que entro a guardar datos1234");
	
	var cedula = $('#cedula').attr("value");
	var nombre = $('#nombre').attr("value");
    var apellido = $('#apellido').attr("value");
    var telefono = $('#telefono').attr("value");
	var direccion = $('#direccion').attr("value");
	var estado = $('#estado').attr("value");
	var email = $('#email').attr("value");
  		 
	var dataString = 'cedula='+cedula +'&nombre='+nombre+'&apellido=' +apellido+'&telefono='+telefono +'&direccion=' +direccion +'&estado='+estado+'&email='+email;
 
	    $.ajax({          
			    	type: "GET",          
			    	url: "../modelos/guardarclientes.php",          
			    	data: dataString,   	
                    success: function (response) 
					{
						$('#mensaje').html(response);
						var result = jQuery.parseJSON(response);
						//alert(result[0].respuesta);
						if(result[0].respuesta==1)
						{ alert ('El cliente se ha guadardo correctamente');				
							
						}
						else if(result[0].respuesta==-1)
						{
							alert ('la cedula del cliente ya esta registrado ');
						}
						else
						{
							alert ('Error al guardar');
						}
                    }
              });
                       	  
	}

