//Doblar los números
//Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.
function doubleNumbers(arr: number[]): number[] {
    return arr.map(num => num * 2);
}
const numbers = [1, 2, 3, 4, 5];
const doubled = doubleNumbers(numbers);
console.log(doubled); // Salida: [2, 4, 6, 8, 10]
export {};      