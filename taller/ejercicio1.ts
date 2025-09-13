// Invertir una cadena
// Crea una función que reciba un string y devuelva ese mismo string invertido.

let palabra: string = "typescript";

function invertirPalabra(palabra: string): string {
    let letras: string[] = [];

    for (let i = 0; i < palabra.length; i++) {
        letras.push(palabra[i]!);
    }

    letras.reverse();
    return letras.join('');
}

let palabraInvertida: string = invertirPalabra(palabra);
console.log("funcion larga: " + palabraInvertida)

// Mejorar la función utilizando métodos de array
// Utiliza los métodos de array split, reverse y join para simplificar la función anterior.

let frase: string = "eres el mejor desarrollador";

function invertirPalabraMejorada(palabra: string): string {
    return palabra.split("").reverse().join("");
}
console.log("Funcion corta: " + invertirPalabraMejorada(frase));
