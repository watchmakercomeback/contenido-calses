function organizar(miString) {
  var letras = [];
  for (var i = 0; i < miString.length; i++) {
    var letra = miString[i];
    var existe = false;
    for (var j = 0; j < letras.length; j++) {
      if (letras[j] === letra) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      letras[letras.length] = letra;
    }
  }

  var conteos = [];
  for (var i = 0; i < letras.length; i++) {
    conteos[i] = 0;
    for (var j = 0; j < miString.length; j++) {
      if (miString[j] === letras[i]) {
        conteos[i]++;
      }
    }
  }

  for (var i = 0; i < letras.length - 1; i++) {
    for (var j = 0; j < letras.length - i - 1; j++) {
      if (letras[j] > letras[j + 1]) {
        var tempLetra = letras[j];
        letras[j] = letras[j + 1];
        letras[j + 1] = tempLetra;

        var tempConteo = conteos[j];
        conteos[j] = conteos[j + 1];
        conteos[j + 1] = tempConteo;
      }
    }
  }

  var resultado = "";
  for (var i = 0; i < letras.length; i++) {
    for (var k = 0; k < conteos[i]; k++) {
      resultado += letras[i];
    }
  }

  return resultado;
}

console.log(organizar("suddendissaster")); 
