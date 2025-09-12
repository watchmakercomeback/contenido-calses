//Eliminar duplicados de un arreglo
//Escribe una función que elimine los duplicados de un arreglo.
const eliminarDuplicados = <T>(arr: T[]): T[] => {
    return Array.from(new Set(arr));
};

const arreglo = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(arreglo)); // Output: [1, 2, 3, 4, 5]
