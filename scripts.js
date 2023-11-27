function actualizar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var datos = JSON.parse(this.responseText);
      // Resto del código de actualización...
    }
  };

  // Cambia la URL para apuntar a la dirección IP o dominio público de tu ESP32
  xhttp.open("GET", "http://192.168.1.138/datos", true);
  xhttp.send();
}

setInterval(actualizar, 500);
