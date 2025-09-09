function transformFunction(originalString) {
    // Objeto para guardar cuántas veces aparece cada letra
    var frequencyOfLetters = {};
    // Arreglo para guardar las letras únicas en el orden en que aparecen
    var uniqueLetters = [];
    // Contador de cuántas letras únicas hemos guardado
    var totalUniqueLetters = 0;
    // Recorrer todas las letras del string y contar frecuencias
    for (var position = 0; position < originalString.length; position++) {
        var currentLetter = originalString[position];
        if (frequencyOfLetters[currentLetter] === undefined) {
            frequencyOfLetters[currentLetter] = 1;
            uniqueLetters[totalUniqueLetters++] = currentLetter;
        }
        else {
            frequencyOfLetters[currentLetter] = frequencyOfLetters[currentLetter] + 1;
        }
    }
    // Ordenar las letras únicas por frecuencia y luego alfabéticamente
    for (var index = 0; index < totalUniqueLetters - 1; index++) {
        var bestLetterIndex = index;
        for (var comparisonIndex = index + 1; comparisonIndex < totalUniqueLetters; comparisonIndex++) {
            var comparisonLetter = uniqueLetters[comparisonIndex];
            var bestLetterSoFar = uniqueLetters[bestLetterIndex];
            var frequencyComparisonLetter = frequencyOfLetters[comparisonLetter];
            var frequencyBestLetter = frequencyOfLetters[bestLetterSoFar];
            // Elegir la letra que tenga mayor frecuencia
            // Si las frecuencias son iguales, elegir la que esté antes en el alfabeto
            if (frequencyComparisonLetter > frequencyBestLetter ||
                (frequencyComparisonLetter === frequencyBestLetter && comparisonLetter < bestLetterSoFar)) {
                bestLetterIndex = comparisonIndex;
            }
        }
        // Intercambiar posiciones si encontramos una letra "mejor"
        if (bestLetterIndex !== index) {
            var temporaryLetter = uniqueLetters[index];
            uniqueLetters[index] = uniqueLetters[bestLetterIndex];
            uniqueLetters[bestLetterIndex] = temporaryLetter;
        }
    }
    // Construir el resultado final repitiendo cada letra según su frecuencia
    var finalResult = "";
    for (var index = 0; index < totalUniqueLetters; index++) {
        var currentLetter = uniqueLetters[index];
        var currentLetterFrequency = frequencyOfLetters[currentLetter];
        for (var repetition = 0; repetition < currentLetterFrequency; repetition++) {
            finalResult += currentLetter;
        }
    }
    return finalResult;
}
// Ejecutar la función
console.log(transformFunction("suddendissaster"));
