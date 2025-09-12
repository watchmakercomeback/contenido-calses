//Filtrar mayores a un valor
//Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.
function filterGreaterThan(arr: number[], n: number): number[] {
    return arr.filter(num => num > n);
}
const numbers = [1, 5, 8, 12, 20, 3];
const n = 10;
const filteredNumbers = filterGreaterThan(numbers, n);
console.log(filteredNumbers); // Salida: [12, 20]
export {};

    