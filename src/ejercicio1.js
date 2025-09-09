let palabra = "holaaa";

console.log("La palabra es:", palabra);

let contador = {};

// 1. Contar cuántas veces aparece cada letra
for (let i = 0; i < palabra.length; i++) {
  let letraTemp = palabra[i];

  if (contador[letraTemp] !== undefined) {
    contador[letraTemp] = contador[letraTemp] + 1;
  } else {
    contador[letraTemp] = 1;
  }
}

console.log("Conteo de letras:", contador);

// 2. Pasar el objeto a un array [letra, cantidad]
let letras = [];
for (let letra in contador) {
  letras.push([letra, contador[letra]]);
}

// 3. Ordenar el array
//    - Primero por cantidad (mayor a menor)
//    - Si tienen la misma cantidad, por orden alfabético
for (let i = 0; i < letras.length - 1; i++) {
  for (let j = i + 1; j < letras.length; j++) {
    if (
      letras[i][1] < letras[j][1] ||
      (letras[i][1] === letras[j][1] && letras[i][0] > letras[j][0])
    ) {
      // Intercambiar posiciones (swap)
      let temp = letras[i];
      letras[i] = letras[j];
      letras[j] = temp;
    }
  }
}

console.log("Ordenado:", letras);

// 4. Reconstruir la palabra
let nuevaPalabra = "";
for (let i = 0; i < letras.length; i++) {
  let letra = letras[i][0];
  let repeticiones = letras[i][1];

  for (let j = 0; j < repeticiones; j++) {
    nuevaPalabra = nuevaPalabra + letra;
  }
}

console.log("Palabra ordenada:", nuevaPalabra);
