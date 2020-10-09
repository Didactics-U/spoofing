     

		 var opciones=' <option value="" >Elige un sintoma</option>';
		 //alert(sinto1.length);
		 for(j=0;j<sinto1.length;j++){
			opciones=opciones+'<option value="'+sinto1[j]+'">'+sinto2[j]+'</option>';	 
		 }
		 opciones=opciones+'</select>';
		// alert(opciones);
		
		
	jQuery.fn.generaNuevosCampos = function(etiqueta, nombreCampo, indice){
		$(this).each(function(){
			elem = $(this);
			elem.data("etiqueta",etiqueta);
			elem.data("nombreCampo",nombreCampo);
			elem.data("indice",indice);
			var cam=1;
			elem.click(function(e){
				cam++;
				e.preventDefault();
				elem = $(this);
				etiqueta = elem.data("etiqueta");
				nombreCampo = elem.data("nombreCampo");
				indice = elem.data("indice");
				 texto_insertar = '<p id="' + nombreCampo + indice + '" > <span>Sintoma:</span> <label><select  name="' + nombreCampo + indice + '" id="' + nombreCampo + indice + '" class="validate[required]"> '+opciones+'  <button onClick="borrar(\''+nombreCampo+indice+'\')" >Quitar</button></p></label>';

				indice ++;
				elem.data("indice",indice);
				nuevo_campo = $(texto_insertar);
				elem.before(nuevo_campo);
				//alert("cam "+cam);
				$('#numero').attr('value',cam );
				
			});
		});
		return this;
	}
	$(document).ready(function(){
		$("#mascampos").generaNuevosCampos("Sintomas", "sintomas", 2);
	
	});
	
	
	 
	
	   
    function borrar(objeto){
	
		 $("#"+objeto).remove();
			
	}