<?php
require 'bbdd.php';

$consulta = "SELECT a.dni, a.nombre'nombre_alumno', a.apellidos, a.edad, c.nombre'nombre_curso' FROM alumnos a JOIN cursos c WHERE a.exp_curso = c.expediente;";
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