<?php
require 'bbdd.php';
require 'funciones.php';

$consulta = "SELECT expediente, nombre FROM cursos";
$resultado=$conexion->query($consulta);
$res = $resultado->fetch_all(MYSQLI_ASSOC);

mysqli_close($conexion);

if($resultado){
    echo json_encode($res);
}
else{
    echo "ERROR consulta";
}
?>