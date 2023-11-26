
function actualizar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var datos = JSON.parse(this.responseText);
      var Datoan = datos.Dato1;
      document.getElementById("Dato1").innerHTML = datos.Dato1;

      

      for (var i = 2; i <= 5; i++) {
        var datoID = "Dato" + i;
        document.getElementById(datoID).innerHTML = datos[datoID];
        var datoValor = datos[datoID];
        var estado = datoValor == "On" ? "on" : "off";
        document.getElementById(datoID).classList.remove("off", "on");
        document.getElementById(datoID).classList.add(estado);
        console.log("Dato " + i + ": " + datoValor);
      }

      for (var i = 6; i <= 9; i++) {
        var datoID = "Dato" + i;
        document.getElementById(datoID).innerHTML = datos[datoID];

        var datoValor = datos[datoID];
        var estado = datoValor == "On" ? "on" : "off";
        document.getElementById(datoID).classList.remove("off", "on");
        document.getElementById(datoID).classList.add(estado);

        var img = document.getElementById("rele" + (i - 5));
        var imgSrc = datoValor == "On" ? "./Im/RC.png" : "./Im/RA.png";
        img.setAttribute("src", imgSrc);
        console.log("Dato " + i + ": " + datoValor);

        var datopueba = 800;
        var voltaje = Datoan ;/// (4096 / 3.3);
        var PH = voltaje;//* (14 / 3.3);
        var angulo = PH * (180 / 14);
        var PHI = voltaje;//PH.toFixed(2);
        var elemento = document.getElementById("angulo1");
        var elemento1 = document.getElementById("angulo2");
        elemento.style.transform = "rotate(" + angulo + "deg)";
        elemento1.style.transform = " scale(1.1) rotate(-" + angulo + "deg)";
        document.getElementById("DatoPH").innerHTML = PHI;
      }

    }

  };
  // Obtener valor de respuesta anterior
  xhttp.open("GET", "/datos", true);
  xhttp.send();


}

setInterval(actualizar, 500);