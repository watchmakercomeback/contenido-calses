let palabra = "esteesunajeeemplo";
palabra = palabra.toLowerCase();

let conteo = {};

for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i];

  if (conteo[letra] === undefined) {
    conteo[letra] = 1;
  } else {
    conteo[letra] = conteo[letra] + 1;
  }
}

let letrasArray = [];
for (let letra in conteo) {
  letrasArray.push([letra, conteo[letra]]);
}

for (let i = 0; i < letrasArray.length - 1; i++) {
  for (let j = 0; j < letrasArray.length - 1 - i; j++) {
    if (letrasArray[j][1] < letrasArray[j + 1][1]) {
      let temp = letrasArray[j];
      letrasArray[j] = letrasArray[j + 1];
      letrasArray[j + 1] = temp;
    } else if (letrasArray[j][1] === letrasArray[j + 1][1]) {
      if (letrasArray[j][0] > letrasArray[j + 1][0]) {
        let temp = letrasArray[j];
        letrasArray[j] = letrasArray[j + 1];
        letrasArray[j + 1] = temp;
      }
    }
  }
}

let resultado = "";
for (let i = 0; i < letrasArray.length; i++) {
  let letra = letrasArray[i][0];
  let repeticiones = letrasArray[i][1];
  let bloque = "";
  for (let j = 0; j < repeticiones; j++) {
    bloque += letra;
  }
  if (i < letrasArray.length - 1) {
    resultado += bloque + ",";
  } else {
    resultado += bloque;
  }
}

console.log(resultado);
