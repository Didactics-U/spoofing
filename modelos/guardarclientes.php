<?php
//pedir permiso(conexion)
include 'bdconexion.php';

//recibir variables


$cedula=$_GET["cedula"];
$nombre=$_GET["nombre"];
$apellido=$_GET["apellido"];
$email=$_GET["email"];


//logica sql
$consulta1 = "select * from  cliente where cedula='$cedula'";
$resultado1 = mysqli_query($con,$consulta1);
	
if ($fila= mysqli_fetch_row($resultado1)) 
{
 
		 $campos[]=array(  'respuesta'=>'-1');  //resutado1
}
else
{
	
	$consulta = "INSERT INTO cliente  VALUES ( '$cedula', '$nombre', '$apellido','$email')";
	//echo $consulta;
$resultado = mysqli_query($con,$consulta);

if($resultado==0)
	 $campos[]=array(  'respuesta'=>'0');//resutado2
else
		 $campos[]=array(  'respuesta'=>'1'); //resultado3

}

//retornar
echo json_encode($campos ); ;





?>




