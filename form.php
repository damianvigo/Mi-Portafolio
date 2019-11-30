<?php

$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];

echo $nombre. " ha dicho:<br/>".$mensaje;

if(mail('damiandanielvigo@gmail.com', $asunto, $mensaje)) {
  echo "mail enviado";
}else{
  echo "Lo siento, no se ha envíado el mensaje";
}
?>