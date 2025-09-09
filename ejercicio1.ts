function transformFunction(originalString: string): string {
    // Objeto para guardar cuántas veces aparece cada letra
    const frequencyOfLetters: { [key: string]: number } = {};

    // Arreglo para guardar las letras únicas en el orden en que aparecen
    const uniqueLetters: string[] = [];

    // Contador de cuántas letras únicas hemos guardado
    let totalUniqueLetters = 0;

    // Recorrer todas las letras del string y contar frecuencias
    for (let position = 0; position < originalString.length; position++) {
        const currentLetter = originalString[position];

        if (frequencyOfLetters[currentLetter] === undefined) {
            frequencyOfLetters[currentLetter] = 1;
            uniqueLetters[totalUniqueLetters++] = currentLetter;
        } else {
            frequencyOfLetters[currentLetter] = frequencyOfLetters[currentLetter] + 1;
        }
    }

    // Ordenar las letras únicas por frecuencia y luego alfabéticamente
    for (let index = 0; index < totalUniqueLetters - 1; index++) {
        let bestLetterIndex = index;

        for (let comparisonIndex = index + 1; comparisonIndex < totalUniqueLetters; comparisonIndex++) {
            const comparisonLetter = uniqueLetters[comparisonIndex];
            const bestLetterSoFar = uniqueLetters[bestLetterIndex];

            const frequencyComparisonLetter = frequencyOfLetters[comparisonLetter];
            const frequencyBestLetter = frequencyOfLetters[bestLetterSoFar];

            // Elegir la letra que tenga mayor frecuencia
            // Si las frecuencias son iguales, elegir la que esté antes en el alfabeto
            if (
                frequencyComparisonLetter > frequencyBestLetter ||
                (frequencyComparisonLetter === frequencyBestLetter && comparisonLetter < bestLetterSoFar)
            ) {
                bestLetterIndex = comparisonIndex;
            }
        }

        // Intercambiar posiciones si encontramos una letra "mejor"
        if (bestLetterIndex !== index) {
            const temporaryLetter = uniqueLetters[index];
            uniqueLetters[index] = uniqueLetters[bestLetterIndex];
            uniqueLetters[bestLetterIndex] = temporaryLetter;
        }
    }

    // Construir el resultado final repitiendo cada letra según su frecuencia
    let finalResult = "";

    for (let index = 0; index < totalUniqueLetters; index++) {
        const currentLetter = uniqueLetters[index];
        const currentLetterFrequency = frequencyOfLetters[currentLetter];

        for (let repetition = 0; repetition < currentLetterFrequency; repetition++) {
            finalResult += currentLetter;
        }
    }

    return finalResult;
}

// Ejecutar la función
console.log(transformFunction("suddendissaster"));
