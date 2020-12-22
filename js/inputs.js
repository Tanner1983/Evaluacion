function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}
 
var total=0;

function sumar(valor) {
  total += valor*1.19;
  document.getElementById('txtTotal').value = total;
}

function restar(valor) {
  total-=valor*1.19;
  document.getElementById('txtTotal').value = total;
}


function mostrarTotal(){
  total = document.getElementById('txtTotal').value;
  nombre = document.getElementById('txtNombre').value;
  apellido = document.getElementById('txtApellido').value;
  alert(total + nombre+ apellido);

  //document.getElementById('nomCliente').value = nombre + " " + apellido;
  document.getElementById("nomCliente").innerHTML = "Sr: " + nombre + " " + apellido;
}

function soloDv(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = "1234567890Kk",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}

("#input").live('change', function() {
  if("#rut:empty") {
    alert('Ingrese rut'); 
    }
  });

  
function validar() {
  if ($('#txtNombre').val().length == 0) {
    alert('Ingrese Nombre');
    return false;
  }else if ($('#rut').val().length == 0){
    alert('Ingrese rut');
    return false;
  }else if ($('#txtApellido').val().length == 0){
    alert('Ingrese Apellido');
    return false;
  }else if ($('#txtDv').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else if ($('#txtDireccion').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else if ($('#FechaNacimiento').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else if ($('#txtMarca').val().length == 0){
    alert('Ingrese Marca');
    return false;
  }else if ($('#txtModelo').val().length == 0){
    alert('Ingrese Modelo vehiculo');
    return false;
  }else if ($('#txtAno').val().length == 0){
    alert('Ingrese Año del vehiculo');
    return false;
  }else if ($('#txtTotal').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else if ($('#FechaServicio').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else if ($('#txtHora').val().length == 0){
    alert('Ingrese Digito Verificador');
    return false;
  }else{
    
  }

}