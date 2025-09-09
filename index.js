function ordenarTexto(texto) {

    let letras = [];
    for (let i = 0; i < texto.length; i++) {
        letras[i] = texto[i];
    }

    let chars = [];
    let counts = [];

    for (let i = 0; i < letras.length; i++) {
        let encontrada = false;
        for (let j = 0; j < chars.length; j++) {
            if (chars[j] === letras[i]) {
                counts[j] = counts[j] + 1;
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            let pos = chars.length;
            chars[pos] = letras[i];
            counts[pos] = 1;
        }
    }

    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = 0; j < chars.length - 1 - i; j++) {
            if (
                counts[j] < counts[j + 1] ||
                (counts[j] === counts[j + 1] && chars[j] > chars[j + 1])
            ) {
                let tempCount = counts[j];
                counts[j] = counts[j + 1];
                counts[j + 1] = tempCount;

                let tempChar = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = tempChar;
            }
        }
    }


    let resultado = "";
    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            resultado += chars[i];
        }
    }

    return resultado;
}

console.log(ordenarTexto("suddendissaster"));
