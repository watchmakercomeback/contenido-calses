function verifyString(text) {
    // 1. Contar los caracteres. / Count the characters.

    let count = {};
    let init = 0;

    while (text[init] !== undefined) {
        let c = text[init];
        if (count[c] === undefined) {
            count[c] = 1;
        } else {
            count[c] = count[c] + 1;
        }

        init++;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // 2. Pasar los caracteres únicos a un array. / Pass the unique characters to an array.

    let lyrics = [];
    let initL = 0;

    for (let k in count) {
        lyrics[initL] = k;
        initL++;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // 3. Ordenar por frecuencia descendente, y alfabéticamente si hay empate. / Sort by descending frequency, and alphabetically if there is a tie.

    let temp;
    let j;

    for (init = 0; init < initL - 1; init++) {
        for (j = 0; j < initL - init - 1; j++) {
            let a = lyrics[j];
            let b = lyrics[j + 1];

            // Primero: frecuencia. / First: frequency.
            if (count[a] < count[b]) {

                temp = lyrics[j];
                lyrics[j] = lyrics[j + 1];
                lyrics[j + 1] = temp;

            }

            // Si la frecuencia es igual, ordenar alfabéticamente. / If the frequency is the same, sort alphabetically.
            else if (count[a] === count[b] && a > b) {
                temp = lyrics[j];
                lyrics[j] = lyrics[j + 1];
                lyrics[j + 1] = temp;
            }
        }
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // 4. Construir el resultado. / Build the result.

    let res = "";

    for (init = 0; init < initL; init++) {
        let c = lyrics[init];
        let k = 0;
        while (k < count[c]) {
            res += c;
            k++;
        }
    }

    return res;
}

console.log(verifyString("caaaarrllooosss"));
