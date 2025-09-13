/*Agrupar anagramas
Dado un arreglo de palabras, agrúpalas en listas de anagramas.*/

function groupAnagrams(words: string[]): { [key: string]: string[] } {
    const anagrams: { [key: string]: string[] } = {};

    for (const word of words) {
        const sorted = word.split('').sort().join('');
        if (!anagrams[sorted]) {
            anagrams[sorted] = [];
        }
        anagrams[sorted].push(word);
    }
    return anagrams;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));