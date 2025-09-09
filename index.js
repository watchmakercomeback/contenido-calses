function ordenarPorFrecuencia(str) {
    var frec = {}, i = 0;
    while (i < str.length) {
        var c = str[i];
        frec[c] = frec[c] ? frec[c] + 1 : 1;
        i = i + 1;
    }

    var chars = [], c;
    for (c in frec) chars[chars.length] = c;

    var a, b, j, tmp;
    i = 0;
    while (i < chars.length - 1) {
        j = 0;
        while (j < chars.length - 1 - i) {
            a = chars[j];
            b = chars[j + 1];
            if (frec[a] < frec[b] || (frec[a] === frec[b] && a > b)) {
                tmp = chars[j]; chars[j] = chars[j + 1]; chars[j + 1] = tmp;
            }
            j = j + 1;
        }
        i = i + 1;
    }

    var res = '', k = 0;
    while (k < chars.length) {
        c = chars[k];
        i = 0;
        while (i < frec[c]) {
            res = res + c;
            i = i + 1;
        }
        k = k + 1;
    }

    return res;
}

// Leer entrada desde la terminal
process.stdout.write("Escribe un texto  : ");

process.stdin.on('data', function(data) {
    var entrada = data.toString().trim();
    var resultado = ordenarPorFrecuencia(entrada);
    console.log("Resultado:", resultado);
    process.exit();
});


    // var chars = [], c;
    // for (c in frec) chars[chars.length] = c;