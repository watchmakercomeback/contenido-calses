const prompt = require("prompt-sync")();

function ordenPorCantidad(str) {
    var freq = {}; // object to store frequency of each character
    var i, j;
    var resultado = ''; // string to store the final result

    // count the frequency of each character
    for (i = 0; i < str.length; i++) {
        var c = str[i];
        if (freq[c] == undefined) {
            freq[c] = 1;
        } else {
            freq[c] = freq[c] + 1;
        }
    }

    // loop until all characters are processed
    while (true) {
        var maxCount = 0; // highest frequency in current iteration
        var charsConMax = []; // array to store characters with max frequency

        // find the maximum frequency
        for (var key in freq) {
            if (freq[key] > maxCount) {
                maxCount = freq[key];
            }
        }

        // if all characters are processed, exit loop
        if (maxCount == 0) {
            break;
        }

        // collect all characters that have the maximum frequency
        for (var key in freq) {
            if (freq[key] == maxCount) {
                charsConMax[charsConMax.length] = key;
            }
        }

        // sort characters with same frequency alphabetically
        for (i = 0; i < charsConMax.length - 1; i++) {
            for (j = i + 1; j < charsConMax.length; j++) {
                if (charsConMax[i] > charsConMax[j]) {
                    var temp = charsConMax[i];
                    charsConMax[i] = charsConMax[j];
                    charsConMax[j] = temp;
                }
            }
        }

        // append characters to result string based on their frequency
        for (i = 0; i < charsConMax.length; i++) {
            for (j = 0; j < maxCount; j++) {
                resultado += charsConMax[i];
            }

            freq[charsConMax[i]] = 0; // mark character as processed
        }
    }

    return resultado;
}

// prompt the user and print the sorted string
console.log(ordenPorCantidad(prompt("Enter your string: ")));
