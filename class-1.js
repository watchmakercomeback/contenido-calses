function ordenarPorFrecuencia(texto) {
    // Paso 1: Contar las ocurrencias de cada carácter
    var contador = {};
    var i = 0;

    while (i < texto.length) {
        var c = texto[i];
        if (contador[c] === undefined) {
            contador[c] = 1;
        } else {
            contador[c] = contador[c] + 1;
        }
        i = i + 1;
    }

    // Paso 2: Crear un array de caracteres únicos
    var caracteresUnicos = [];
    var key;
    for (key in contador) {
        caracteresUnicos[caracteresUnicos.length] = key;
    }

    // Paso 3: Ordenar caracteresUnicos por frecuencia y alfabéticamente si hay empate
    // Implementamos un ordenamiento tipo burbuja
    var j, temp;
    i = 0;
    while (i < caracteresUnicos.length - 1) {
        j = 0;
        while (j < caracteresUnicos.length - 1 - i) {
            var a = caracteresUnicos[j];
            var b = caracteresUnicos[j + 1];

            var freqA = contador[a];
            var freqB = contador[b];

            // Si la frecuencia de A es menor que la de B, intercambiar
            // Si son iguales, intercambiar si A es mayor que B (orden alfabético)
            if (freqA < freqB || (freqA === freqB && a > b)) {
                temp = caracteresUnicos[j];
                caracteresUnicos[j] = caracteresUnicos[j + 1];
                caracteresUnicos[j + 1] = temp;
            }

            j = j + 1;
        }
        i = i + 1;
    }

    // Paso 4: Construir el string final con las letras ordenadas por cantidad
    var resultado = "";
    i = 0;
    while (i < caracteresUnicos.length) {
        var letra = caracteresUnicos[i];
        var repeticiones = contador[letra];
        var k = 0;
        while (k < repeticiones) {
            resultado = resultado + letra;
            k = k + 1;
        }
        i = i + 1;
    }

    return resultado;
}

// Ejemplo de uso:
var resultado = ordenarPorFrecuencia("Carrlosss");
console.log(resultado); // Output: sssrraclo
