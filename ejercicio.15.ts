//Encontrar el número más frecuente
//Dado un arreglo de números, encuentra el número que más veces se repite.
function mostFrequentNumber(arr: number[]): number | null {
    const frequencyMap: { [key: number]: number } = {};
    let maxCount = 0;
    let mostFrequent: number | null = null;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

const numbers = [1, 3, 2, 3, 4, 1, 3, 2];
const frequentNumber = mostFrequentNumber(numbers);
console.log(frequentNumber); // Salida: 3
export {};  

