//Calcular promedio
//Dado un arreglo de números, calcula el promedio de todos sus valores.
function calculateAverage(arr: number[]): number {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log(average); // Salida: 30
export {};

