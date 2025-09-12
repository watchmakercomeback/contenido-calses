//Ordenar palabras por longitud
//Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.
function sortByLength(arr: string[]): string[] {
    return arr.sort((a, b) => a.length - b.length);
}
const words = ["apple", "fig", "banana", "kiwi", "cherry"];
const sortedWords = sortByLength(words);
console.log(sortedWords);       
// Salida: [ 'fig', 'kiwi', 'apple', 'banana', 'cherry' ]
export {};  


