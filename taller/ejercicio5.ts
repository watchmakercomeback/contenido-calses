/*Eliminar duplicados de un arreglo
Escribe una función que elimine los duplicados de un arreglo.*/

let numeros: number[]=[1,1,1,2,2,2,3,4,5,6,7,8,9,9,9,0,0,0];
let letras: string[]=['b','c','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function eliminarDuplicados(array: (number | string)[]): (number | string)[] {
    return Array.from(new Set(array));
} 

console.log(eliminarDuplicados(numeros));
console.log(eliminarDuplicados(letras));