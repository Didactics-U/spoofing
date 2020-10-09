function validarcliente() 
{
	var cedula = $('#cedula').attr("value");
	var nombre = $('#nombre').attr("value");
    var apellido = $('#apellido').attr("value");
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
 	if (email == 0){
	  
        alert("Debe ingresar su email");
	   $('#email').focus();
		return false;
    };
   // alert("Datos completos correctamente");
	//$('#mensaje').html("Datos completos correctamente");
	
	guardardatos();
	
}

function validarclienteactualizar() 
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
	  
        alert("Debe ingresar su email");
	   $('#email').focus();
		return false;
    };
   // alert("Datos completos correctamente");
	//$('#mensaje').html("Datos completos correctamente");
	
	actualizardatos();
	
}

function validarclientebuscar() {

	var cedula = $('#cedula').attr("value");
	if (cedula==0) {

		alert("Debe ingresar una cedula");
		$('#cedula').focus();
		return false;
	};

	buscardatos();

}


function guardardatos(){
		   //alert("para saber que entro a guardar datos1234");
	
	var cedula = $('#cedula').attr("value");
	var nombre = $('#nombre').attr("value");
    var apellido = $('#apellido').attr("value");
	var email = $('#email').attr("value");
  		 
	var dataString = 'cedula='+cedula +'&nombre='+nombre+'&apellido=' +apellido+'&email='+email;
 
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
	
	function buscardatos(){

		var cedula = $('#cedula').attr("value");
		var dataString = 'cedula='+cedula;

			 $.ajax({          
			    	type: "GET",          
			    	url: "../modelos/buscarclientes.php",          
			    	data: dataString,   	
                    success: function (response) 
					{
						$('#mensaje').html(response);
						var result = jQuery.parseJSON(response);
						//alert(result[0].respuesta);
						if(result[0].respuesta==1)
						{ alert ('Se encontró un resultado');	
						$('#nombre').attr("value",result[0].nombre);
						$('#apellido').attr("value",result[0].apellido);
						$('#telefono').attr("value",result[0].telefono);
						$('#direccion').attr("value",result[0].direccion);			
						$('#estado').attr("value",result[0].estado);
						$('#email').attr("value",result[0].email);

							
						}
						else if(result[0].respuesta==-1)
						{
							alert ('Esta cedula no est¿xiste ');
							$('#nombre').attr("value", "");
							$('#apellido').attr("value", "");
							$('#telefono').attr("value", "");
							$('#direccion').attr("value", "");
							$('#estado').attr("value", "");
							$('#email').attr("value", "");				
						}
						
                    }
              });
		}
	
	function actualizardatos(){
	var cedula = $('#cedula').attr("value");
	var nombre = $('#nombre').attr("value");
    var apellido = $('#apellido').attr("value");
    var telefono = $('#telefono').attr("value");
	var direccion = $('#direccion').attr("value");
	var estado = $('#estado').attr("value");
	var email = $('#email').attr("value");
	
	var dataString = 'cedula='+cedula +'&nombre='+nombre +'&apellido='+apellido +'&telefono='+telefono +'&direccion='+direccion 
	+'&estado='+estado +'&email='+email;
  		 
  		 $.ajax({          
			    	type: "GET",          
			    	url: "../modelos/actualizarclientes.php",          
			    	data: dataString,   	
                    success: function (response) 
					{
						$('#mensaje').html(response);
						var result = jQuery.parseJSON(response);
						//alert(result[0].respuesta);
						if(result[0].respuesta==1)
						{ alert ('El cliente se ha actualizado correctamente');				
							$('#cedula').attr("value");
						}
						else if(result[0].respuesta==-1)
						{
							alert ('la cedula del cliente no existe ');
						}
						else
						{
							alert ('Error al actualizar');
						}
                    }
              });
}


		function validarclienteeliminar()
		{
			var cedula = $('#cedula').attr("value");

			if(cedula==0){
				alert("Debe ingresar una cedula");
				$('#cedula').focus();
				return false;
			};
			eliminardatos();
		}
			
		function eliminardatos(){
			var cedula = $('#cedula').attr("value");
			var dataString = 'cedula='+cedula;


  		 $.ajax({          
			    	type: "GET",          
			    	url: "../modelos/eliminarclientes.php",          
			    	data: dataString,   	
                    success: function (response) 
					{
						$('#mensaje').html(response);
						var result = jQuery.parseJSON(response);
						//alert(result[0].respuesta);
						if(result[0].respuesta==1)
						{ alert ('El cliente se ha eliminó correctamente');				
							$('#cedula').attr("value", "");
							limpiarformulariocliente();
						}
						else if(result[0].respuesta==-1)
						{
							alert ('la cedula del cliente no existe ');
						}
						else
						{
							alert ('Error al Eliminar');
						}
                    }
              });

			}