/*Contador de palabras
Dado un párrafo, cuenta cuántas veces aparece cada palabra.*/

let paragraph: string = "Este es un párrafo de ejemplo. Este párrafo es solo para contar palabras. Contar palabras es divertido.";

let words: string[] = paragraph.toLowerCase().replace(/[.,]/g, '').split(' ');

let wordCount: { [key: string]: number } = {};

for (let word of words) {
    if (wordCount[word] === undefined) {
        wordCount[word] = 1;
    } else {
        wordCount[word]++;
    }
}

console.log(wordCount);
  