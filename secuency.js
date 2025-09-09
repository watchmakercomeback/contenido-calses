let palabra = "carliiitoosss";
let letras = [];
let frecuencias = [];

for (let i = 0; i < palabra.length; i++) {
    letras[i] = palabra[i];
}

for (let i = 0; i < letras.length; i++) {
    let encontrada = false;
    for (let j = 0; j < frecuencias.length; j++) {
        if (frecuencias[j][0] === letras[i]) {
            frecuencias[j][1]++;
            encontrada = true;
            break;
        }
    }
    if (!encontrada) {
        frecuencias[frecuencias.length] = [letras[i], 1];
    }
}

for (let i = 0; i < frecuencias.length; i++) {
    for (let j = 0; j < frecuencias.length - 1; j++) {
        if (frecuencias[j][1] < frecuencias[j+1][1] ||
            (frecuencias[j][1] === frecuencias[j+1][1] && frecuencias[j][0] > frecuencias[j+1][0])) {
            let temp = frecuencias[j];
            frecuencias[j] = frecuencias[j+1];
            frecuencias[j+1] = temp;
        }
    }
}

let resultado = "";
for (let i = 0; i < frecuencias.length; i++) {
    for (let k = 0; k < frecuencias[i][1]; k++) {
        resultado += frecuencias[i][0];
    }
}

console.log(resultado);
