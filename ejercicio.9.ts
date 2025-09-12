//Agrupar anagramas
//Dado un arreglo de palabras, agrúpalas en listas de anagramas.
function groupAnagrams(words: string[]): string[][] {
    const anagramMap: Record<string, string[]> = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (!anagramMap[sortedWord]) {
            anagramMap[sortedWord] = [];
        }
        anagramMap[sortedWord].push(word);
    }
    return Object.values(anagramMap);
}
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams); // Salida: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
export {};  