// ## Ejercicios Extra de Arreglos
/*Doblar los números
Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.*/

let arregloNumeros: number[] = [1, 2, 3, 4, 5];
let numerosDoblados: number[] = arregloNumeros.map(num => num * 2);
console.log("Números doblados:", numerosDoblados); 

/*Filtrar mayores a un valor
Dado un arreglo de números y un valor `n`, devuelve solo los números mayores que `n`.*/

let n: number = 5;
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mayores: number[] = array.filter(num => num > n);
console.log(`Números mayores que ${n}:`, mayores);

/*Ordenar palabras por longitud
Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.*/

let palabras: string[] = ["manzana", "kiwi", "banana", "cereza", "uva"];
let palabrasOrdenadas: string[] = palabras.sort((a, b) => a.length - b.length);
console.log("Palabras ordenadas por longitud:", palabrasOrdenadas);

/*Calcular promedio
Dado un arreglo de números, calcula el promedio de todos sus valores.*/

let numeros: number[] = [10, 20, 30, 40, 50];
let suma: number = numeros.reduce((acc, num) => acc + num, 0);
let promedio: number = suma / numeros.length;
console.log("Promedio:", promedio);

/*Encontrar el número más frecuente
Dado un arreglo de números, encuentra el número que más veces se repite.*/

function mostFrequentNumber(nums: number[]): number | null {
  if (nums.length === 0) return null;

  const count: { [key: number]: number } = {};

  // Contar ocurrencias
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  // Buscar el de mayor frecuencia
  let maxNum = nums[0];
  let maxCount = count[maxNum!];

  for (const num in count) {
    if (count[num]! > maxCount!) {
      maxNum = Number(num);
      maxCount = count[num];
    }
  }

  return maxNum!;
}

// Ejemplo de uso
console.log(mostFrequentNumber([1, 3, 2, 3, 4, 3, 5, 2, 2, 2])); 

