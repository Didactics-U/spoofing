
  var val_form=0 ;
  function vacio(campo){
    if($('#'+campo).attr("value")==""){
        return false;
    }
  }

  function numerico(campo){
    var num=$('#'+campo).attr("value");
    if(isNaN(parseInt(num))){
        return false;
    }
  }

   function resetcampos(){
       $('#error_identificacion').text("");
       $('#error_expedida').text("");
       $('#error_nombre').text("");
       $('#error_telefono').text("");
       $('#error_direccion').text("");
       $('#error_ciudad').text("");
       $('#error_departamento').text("");


   }
  function validar(){
      if(validar_vacio()==0){
         if(validar_entero()==0){
             guardar();
         }
      }

  }


  function validar_vacio(){
      resetcampos();
    val_form=0 ;
    if(vacio('identificacion')==false){
       $('#error_identificacion').text("Campo requerido");
       val_form=1;
    }
    if(vacio('expedida')==false){
        $('#error_expedida').text("Campo requerido");
        val_form=1
     }
    if(vacio('nombre')==false){
         $('#error_nombre').text("Campo requerido");
         val_form=1
    }
    if(vacio('telefono')==false){
        $('#error_telefono').text("Campo requerido");
        val_form=1
    }
    if(vacio('direccion')==false){
        $('#error_direccion').text("Campo requerido");
        val_form=1
    }
    if(vacio('ciudad')==false){
        $('#error_ciudad').text("Campo requerido");
        val_form=1
    }
    if(vacio('departamento')==false){
        $('#error_departamento').text("Campo requerido");
        val_form=1
    }

    return val_form;


  }

  function validar_entero(){
      resetcampos();

    if(numerico('identificacion')==false){
       $('#error_identificacion').text("Debe ser numérico");
       val_form=1;
    }
    if(numerico('telefono')==false){
        $('#error_telefono').text("Debe ser numérico");
       val_form=1
    }
    return val_form;


  }


  $(document).ready(function(){

      $('#identificacion').bind('blur', function(){
          $('#error_identificacion').text("");
          var iden= $(this).val();
          var datos={
              ident: iden
          };
          $.ajax({
              url: '<?php echo base_url()?>/index.php/clientes/existe_cliente_ajax',
              type: 'POST',
              data: datos,
                success: function (msg){
                   if(msg=="si"){
                       val_form=1;
                        $('#error_identificacion').text("El cliente con esta identificacion ya existe");
                   }else{
                       val_form=0;
                   }
                }

          });

      });


  });

  function guardar(){

    if(val_form==0){

        //se guardan los datos

        var datos= $("#reg_clientes_form").serialize();
          $.ajax({
              url: '<?php echo base_url()?>/index.php/clientes/guardar_cliente_ajax',
              type: 'POST',
              data: datos,
                success: function (msg){
                       if(msg=="si"){
                           retrurn_datos();
                       }
                       if(msg=="no"){
                        alert('Error al guardar la informacion');
                       }
                }

          });



    }else{
        alert('El usuario ya esta registrado en la base de datos');

    }

  }


