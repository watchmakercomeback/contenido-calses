/*    1. Invertir una cadena

Crea una función que reciba un string y devuelva ese mismo string invertido.

ts
Ejemplo:
Entrada: "typescript"
Salida: "tpircsytpe"    */
// function recibir(palabra: string): string{
//     let arreglo: string[] = [];  // se crea cada vez que llamo la función
//     for(let i = palabra.length - 1; i >= 0; i--){
//         arreglo.push(palabra.charAt(i));   // meto la letra invertida
//     }
//     return arreglo.join("");
// }
// console.log(recibir("Jose"));
// console.log("TypeScript");
/*  2. Verificar paréntesis balanceados

Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.

ts
Ejemplo:
"(a+b)"  -> true
"(a+b))" -> false   */
// function verificarBalance(expresion: string): boolean {
//     let contador = 0;
//     for (let char of expresion){
//         if (char === "("){
//             contador++;
//         } else if (char === ")"){
//             contador--;
//             if(contador < 0) return false; // se cerró sin haberse abierto
//         }
//     }
//     return contador === 0; // true solo si todos se cerraron
// }
// console.log(verificarBalance("(a+b)"));
// console.log(verificarBalance("(a+b))"));
// console.log(verificarBalance("))(a+b)"));
/*  3. Cola de impresión

Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.

*/
// class ColaImpresion {
//     private cola: string[] = [];
//     agregar(doc: string){
//         this.cola.push(doc);
//     }
//     retirar(): string | undefined{
//         return this.cola.shift();
//     }
//     contar(): number{
//         return this.cola.length;
//     }
// }
// let impresora = new ColaImpresion();
// impresora.agregar("doc1");
// impresora.agregar("doc2");
// impresora.agregar("doc3");
// impresora.agregar("doc4");
// impresora.agregar("doc5");
// console.log("Cola inicial:", impresora);
// console.log(`Se retiró: ${impresora.retirar()}`);
// console.log("Cola después de retirar", impresora);
// console.log(`Cantidad de documentos: ${impresora.contar()}`);
/* 4. Primera letra no repetida

Dado un string, encuentra la primera letra que no se repite.

ts
// Ejemplo:
// Entrada: "swiss"
// Salida: "w"    */
// let palabra: string = "swiss";
// function recibir(palabra: string): string{
//     let objeto: { [key: string]: number } = {};  // se crea cada vez que llamo la función
//     for(let i = 0; i < palabra.length; i++){
//         let letra = palabra.charAt(i);
//         if(letra in objeto){
//             objeto[letra]++;   // si ya está, sumo 1
//         } else {
//             objeto[letra] = 1; // si no está, la creo con 1
//         }
//     }
//     for(let x = 0; x < palabra.length; x++){
//         let letraSalida = palabra.charAt(x);
//         if(objeto[letraSalida] === 1){
//             return letraSalida;   // retorno la primera que tenga 1
//         }
//     }
//     return ""; // si no hay ninguna que no se repita
// }
// console.log("Entrada: " + palabra);
// console.log("Salida: " + recibir(palabra))
/*  Eliminar duplicados de un arreglo

Escribe una función que elimine los duplicados de un arreglo.

ts
Entrada: [1, 2, 2, 3, 4, 4, 5]
Salida: [1, 2, 3, 4, 5]   */
// let arreglo: number[] = [1, 2, 2, 2, 2, 2, 3, 4, 4, 5];
// function recibir(arreglo: number[] = []){
//     let conjunto = new Set(arreglo); // un set no permite duplicados
//     return Array.from(conjunto); // convierto el set a un arreglo y lo retorno
// }
// console.log(recibir(arreglo));
/*  Rotación de un arreglo

Dado un arreglo y un número `k`, rota el arreglo hacia la derecha `k` veces.

ts
Entrada: [1,2,3,4,5], k=2
Salida: [4,5,1,2,3]    */
// let arreglo: number[] = [1, 2, 3, 4, 5];
// let k: number = 2;
// function recibir(arreglo: number[] = [], k: number = 0){
//     let arrayLength = arreglo.length;
//     k = k % arrayLength; // en caso de que k sea mayor que el tamaño del arreglo
//     let parte1 = arreglo.slice(-k); // los últimos k elementos
//     let parte2 = arreglo.slice(0, arrayLength - k); // el resto de elementos
//     return parte1.concat(parte2); // uno las dos partes y retorno
// }
// console.log(recibir(arreglo, k));
/*  7. Historial de navegador

Simula el historial de un navegador con las siguientes operaciones:

- `visit(url)`: visitar una nueva página.
- `back()`: regresar a la página anterior.
- `forward()`: avanzar a la página siguiente.   */
// class HistorialNavegador {
//     private backStack: string[] = [];
//     private forwardStack: string[] = [];
//     private currentPage: string | null = null;
//     // visitar una nueva página
//     visit(url: string): void {
//         if (this.currentPage !== null) {
//             this.backStack.push(this.currentPage);
//         }
//         this.currentPage = url;
//         this.forwardStack = []; // limpiar el forward cuando visitas algo nuevo
//     }
//     // regresar a la página anterior
//     back(): string | null {
//         if (this.backStack.length === 0) return this.currentPage;
//         this.forwardStack.push(this.currentPage!);
//         this.currentPage = this.backStack.pop()!;
//         return this.currentPage;
//     }
//     // avanzar a la página siguiente
//     forward(): string | null {
//         if (this.forwardStack.length === 0) return this.currentPage;
//         this.backStack.push(this.currentPage!);
//         this.currentPage = this.forwardStack.pop()!;
//         return this.currentPage;
//     }
//     // ver la página actual
//     getCurrentPage(): string | null {
//         return this.currentPage;
//     }
// }
// // Ejemplo de uso 
// const navegador = new HistorialNavegador();
// navegador.visit("google.com");
// navegador.visit("youtube.com");
// navegador.visit("github.com");
// console.log("Actual:", navegador.getCurrentPage()); // github.com
// navegador.back();
// console.log("Atrás:", navegador.getCurrentPage()); // youtube.com
// navegador.back();
// console.log("Atrás:", navegador.getCurrentPage()); // google.com
// navegador.forward();
// console.log("Adelante:", navegador.getCurrentPage()); // youtube.com
/*  8. Contador de palabras

Dado un párrafo, cuenta cuántas veces aparece cada palabra.

```ts
Entrada: "hola mundo hola typescript"
Salida: { "hola": 2, "mundo": 1, "typescript": 1 }   */
// function contarPalabras(texto: string): { [key: string]: number } {
//     // dividir el texto en palabras separadas por espacios
//     let palabras = texto.split(" ");
//     let contador: { [key: string]: number } = {};
//     for (let palabra of palabras) {
//         if (contador[palabra]) {
//             contador[palabra]++; // si ya existe, incrementa
//         } else {
//             contador[palabra] = 1; // si no existe, empieza en 1
//         }
//     }
//     return contador;
// }
// // Ejemplo de uso
// let entrada = "hola mundo hola typescript";
// console.log("Entrada:", entrada);
// console.log("Salida:", contarPalabras(entrada));
/*  9. Agrupar anagramas

Dado un arreglo de palabras, agrúpalas en listas de anagramas.

```ts
// Entrada: ["eat", "tea", "tan", "ate", "nat", "bat"]
# Salida: [["eat","tea","ate"], ["tan","nat"], ["bat"]] */
// function agruparAnagramas(palabras: string[]): string[][] {
//     const mapa: Record<string, string[]> = {};
//     for (const palabra of palabras) {
//         // Ordenamos las letras para usar como clave
//         const clave = palabra.split("").sort().join("");
//         if (!mapa[clave]) {
//             mapa[clave] = [];
//         }
//         mapa[clave].push(palabra);
//     }
//     // Retornamos los valores del mapa como listas de anagramas
//     return Object.values(mapa);
// }
// // Ejemplo de uso
// const entrada = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(agruparAnagramas(entrada));
/*  10. Cola de tareas con prioridad

Crea una cola de tareas en donde cada tarea tiene un `nombre` y una `prioridad`.
La operación de extracción debe devolver siempre la tarea con mayor prioridad.

```ts
// Ejemplo:
// enqueue({nombre: "Tarea A", prioridad: 1})
// enqueue({nombre: "Tarea B", prioridad: 5})
// dequeue() -> {nombre: "Tarea B", prioridad: 5}   */
// type Tarea = { nombre: string; prioridad: number };
// let cola: Tarea[] = [];
// // Agregar una tarea a la cola
// function enqueue(tarea: Tarea) {
//   cola.push(tarea);
//   // Ordenamos para que la tarea con mayor prioridad quede al inicio
//   cola.sort((a, b) => b.prioridad - a.prioridad);
// }
// // Sacar la tarea con mayor prioridad
// function dequeue(): Tarea | undefined {
//   return cola.shift(); // elimina y devuelve la primera
// }
// // --- Ejemplo de uso ---
// enqueue({ nombre: "Tarea A", prioridad: 1 });
// enqueue({ nombre: "Tarea B", prioridad: 5 });
// enqueue({ nombre: "Tarea C", prioridad: 3 });
// console.log(dequeue()); // { nombre: 'Tarea B', prioridad: 5 }
// console.log(cola); // [{ nombre: 'Tarea C', prioridad: 3 }, { nombre: 'Tarea A', prioridad: 1 }]
/*  11. Doblar los números

Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.

```ts
// Entrada: [1, 2, 3, 4]
// Salida: [2, 4, 6, 8] */
// function doblarNumeros(numeros: number[]): number[] {
//   let resultado: number[] = [];
//   for (let i = 0; i < numeros.length; i++) {
//     resultado.push(numeros[i] * 2);
//   }
//   return resultado;
// }
// //  Ejemplo 
// console.log(doblarNumeros([1, 2, 3, 4])); 
// // Salida: [2, 4, 6, 8]
/*  12. Filtrar mayores a un valor

Dado un arreglo de números y un valor `n`, devuelve solo los números mayores que `n`.

```ts
// Entrada: [1, 5, 8, 3, 10], n=5
// Salida: [8, 10]  */
// function filtrarMayores(numeros: number[], n: number): number[] {
//   let resultado: number[] = [];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > n) {
//       resultado.push(numeros[i]);
//     }
//   }
//   return resultado;
// }
// // Ejemplo
// console.log(filtrarMayores([1, 5, 8, 3, 10], 5));
// // Salida: [8, 10]
/*  13. Ordenar palabras por longitud

Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.

```ts
// Entrada: ["sol", "mar", "estrella", "luz"]
# Salida: ["sol", "mar", "luz", "estrella"] */
// function ordenarPorLongitud(palabras: string[]): string[] {
//   // usamos sort con una función que compara la longitud de las palabras
//   return palabras.sort(function (a, b) {
//     return a.length - b.length;
//   });
// }
// // Ejemplo
// console.log(ordenarPorLongitud(["sol", "mar", "estrella", "luz", "cielo"]));
// // Salida: ["sol", "mar", "luz", "cielo", "estrella"]
/*  14. Calcular promedio

Dado un arreglo de números, calcula el promedio de todos sus valores.

```ts
// Entrada: [4, 8, 6, 10]
// Salida: 7    */
// function calcularPromedio(numeros: number[]): number {
//   let suma = 0;
//   // sumamos todos los elementos
//   for (let i = 0; i < numeros.length; i++) {
//     suma = suma + numeros[i];
//   }
//   // promedio = suma de elementos / cantidad de elementos
//   let promedio = suma / numeros.length;
//   return promedio;
// }
// // Ejemplo
// console.log(calcularPromedio([4, 8, 6, 10]));
// // Salida: 7
/*  15. Encontrar el número más frecuente

Dado un arreglo de números, encuentra el número que más veces se repite.

```ts
// Entrada: [1, 3, 2, 3, 4, 3, 5, 2]
// Salida: 3    */
function numeroMasFrecuente(numeros) {
    var conteo = {}; // objeto para contar repeticiones
    // Contar cada número
    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i];
        if (conteo[num]) {
            conteo[num] = conteo[num] + 1;
        }
        else {
            conteo[num] = 1;
        }
    }
    // Buscar el número con mayor frecuencia
    var maxRepeticiones = 0;
    var numeroFrecuente = numeros[0];
    for (var num in conteo) {
        if (conteo[num] > maxRepeticiones) {
            maxRepeticiones = conteo[num];
            numeroFrecuente = Number(num);
        }
    }
    return numeroFrecuente;
}
// Ejemplo
console.log(numeroMasFrecuente([1, 3, 2, 3, 4, 3, 5, 2]));
// Salida: 3
