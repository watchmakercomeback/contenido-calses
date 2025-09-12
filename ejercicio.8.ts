//Contador de palabras
//Dado un párrafo, cuenta cuántas veces aparece cada palabra.
function countWords(paragraph: string): Record<string, number> {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCount: Record<string, number> = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    return wordCount;
}
const paragraph = "This is a test. This test is only a test.";
const result = countWords(paragraph);
console.log(result); // Salida: { this: 2, is: 2, a: 2, test: 3, only: 1 }
export {};  