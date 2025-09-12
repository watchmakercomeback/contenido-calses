//Rotación de un arreglo
//Dado un arreglo y un número k, rota el arreglo hacia la derecha k veces.
function rotateArray(arr: number[], k: number): number[] {
    const n = arr.length;
    k = k % n; // Manejar casos donde k es mayor que la longitud del arreglo
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

//Datos de prueba
const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray); // Salida: [4, 5, 1, 2, 3]
export {};
