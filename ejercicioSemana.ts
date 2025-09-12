// Taller de Repaso – Estructuras de Datos y Arreglos en TypeScript
// Instrucciones:
// Resuelve los siguientes ejercicios en TypeScript. Cada problema requiere pensar en cómo almacenar, manipular
// y procesar la información de manera eficiente.

/* Ejercicios Generales
1. Invertir una cadena
Crea una función que reciba un string y devuelva ese mismo string invertido.*/
console.log("-------Ejercicio 1-------")

function revertirTexto(text: string): string {
    return text.split('').reverse().join('')
}
console.log(revertirTexto('typescript'))

/* 2. Verificar paréntesis balanceados
Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.*/
console.log("-------Ejercicio 2-------")

function parentesisBalanceado(text: string): boolean {
    let contador = 0;

    for (const char of text) {
        if (char === "(") contador++;
        if (char === ")") contador--;
        if (contador < 0) return false;
    }
    return contador === 0;
}

console.log(parentesisBalanceado("(true)"));
console.log(parentesisBalanceado("(false))"));

/*3. Cola de impresión
Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y
contar documentos.*/
console.log("-------Ejercicio 3-------")

type Cola = string[];

const agregar = (cola: Cola, doc: string) => cola.push(doc);
const imprimir = (cola: Cola) => cola.shift();
const contar = (cola: Cola) => cola.length;

const cola: Cola = [];


agregar(cola, "Doc1.pdf");
agregar(cola, "Doc2.pdf");
agregar(cola, "Doc3.pdf");

console.log("documentos en cola: ", contar(cola));
console.log("Imprimiendo: ", imprimir(cola));
console.log("Imprimiendo: ", imprimir(cola));
console.log("documentos en cola: ", contar(cola));

/*4. Primera letra no repetida
Dado un string, encuentra la primera letra que no se repite.*/
console.log("-------Ejercicio 4-------")

function primeraNoRepetida(text: string): string | null {
    const mapa = new Map<string, number>();
    for (const char of text) {
        mapa.set(char, (mapa.get(char) ?? 0) + 1);
    }
    for (const char of text) {
        if (mapa.get(char) === 1) return char;
    }
    return null;
}

console.log(primeraNoRepetida("swiss"));

/*5. Eliminar duplicados de un arreglo
Escribe una función que elimine los duplicados de un arreglo.*/
console.log("-------Ejercicio 5-------");

function eliminarDuplicados<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(eliminarDuplicados(["2", "2", "2", "3", "4", "4", "5"]));

/*6. Rotación de un arreglo
Dado un arreglo y un número k, rota el arreglo hacia la derecha k veces.*/
console.log("-------Ejercicio 6-------");

const rotar = <T>(arr: T[], k: number) =>
    arr.slice(-k % arr.length).concat(arr.slice(0, -k % arr.length));

console.log(rotar([1, 2, 3, 4, 5], 1));

/*7. Simula el historial de un navegador con las siguientes operaciones:
visit(url): visitar una nueva página.
back(): regresar a la página anterior.
forward(): avanzar a la página siguiente.*/
console.log("-------Ejercicio 7-------");

const navegador = {
    back: [] as string[],
    forward: [] as string[],
    current: null as string | null,

    visit(url: string) {
        if (this.current) this.back.push(this.current);
        this.current = url;
        this.forward = [];
        console.log("Https://", url);
    },

    backFn() {
        if (!this.back.length) return console.log("No hay url anterior");
        this.forward.push(this.current!);
        this.current = this.back.pop()!;
        console.log("⬅️", this.current);
    },

    forwardFn() {
        if (!this.forward.length) return console.log("No hay url adelante");
        this.back.push(this.current!);
        this.current = this.forward.pop()!;
        console.log("➡️", this.current);
    }
}

// 🔎 Ejemplo
navegador.visit("google.com");
navegador.visit("openai.com");
navegador.visit("typescriptlang.org");
navegador.backFn();
navegador.backFn();
navegador.forwardFn();

/*8. Contador de palabras
Dado un párrafo, cuenta cuántas veces aparece cada palabra.*/
console.log("-------Ejercicio 8-------");

const contadorPalabras = (texto: string) =>
    texto.toLowerCase().split(/\s+/).reduce((acc, w) => {
        acc[w] = (acc[w] ?? 0) + 1;
        return acc;
    }, {} as Record<string, number>);

console.log(contadorPalabras("hola hola mundo typescript"));

/*9. Agrupar anagramas
Dado un arreglo de palabras, agrúpalas en listas de anagramas*/
console.log("-------Ejercicio 9-------");

const agruparAnagramas = (palabras: string[]) =>
    Object.values(
        palabras.reduce((acc, w) => {
            const clave = w.split("").sort().join("");
            (acc[clave] ||= []).push(w);
            return acc;
        }, {} as Record<string, string[]>)
    );

console.log(agruparAnagramas(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*10. Cola de tareas con prioridad
Crea una cola de tareas en donde cada tarea tiene un nombre y una prioridad.
La operación de extracción debe devolver siempre la tarea con mayor prioridad.*/
console.log("-------Ejercicio 10-------");

type Tarea = { nombre: string; prioridad: number };

class ColaPrioridad {
    private tareas: Tarea[] = [];

    encolar(nombre: string, prioridad: number) {
        this.tareas.push({ nombre, prioridad });
    }

    desencolar(): Tarea | undefined {
        if (!this.tareas.length) return undefined;
        this.tareas.sort((a, b) => b.prioridad - a.prioridad);
        return this.tareas.shift(); // quita la de mayor prioridad
    }
}

/*11. Doblar los números
Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.*/
console.log("-------Ejercicio 11-------");

function doblarNumeros(nums: number[]): number[] {
    return nums.map(n => n * 2);
}
console.log(doblarNumeros([1, 2, 3, 4])); // [2, 4, 6, 8]

/*12. Filtrar mayores a un valor
Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.*/
console.log("-------Ejercicio 12-------");

const filtrarMayores = (nums: number[], n: number) => nums.filter(x => x > n);
console.log(filtrarMayores([2, 7, 1, 9], 3)); // [7, 9]

/*13. Ordenar palabras por longitud
Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.*/
console.log("-------Ejercicio 13-------");

const ordenarPorLongitud = (arr: string[]) =>
    arr.sort((a, b) => a.length - b.length);
console.log(ordenarPorLongitud(["hola", "adiós", "sí", "typescript"]));

/*14. Calcular promedio
Dado un arreglo de números, calcula el promedio de todos sus valores.*/
console.log("-------Ejercicio 14-------");

const promedio = (nums: number[]) =>
    nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
console.log(promedio([5, 15, 25])); // 15

/*15. Encontrar el número más frecuente
Dado un arreglo de números, encuentra el número que más veces se repite.*/
console.log("-------Ejercicio 15-------");

const masFrecuente = (nums: number[]) => {
    const conteo: Record<number, number> = {};
    for (const n of nums) conteo[n] = (conteo[n] ?? 0) + 1;
    return Number(Object.keys(conteo).reduce((a, b) =>
        conteo[+a] >= conteo[+b] ? a : b
    ));
};
// Si quisieras devolver TODOS los más frecuentes en caso de empate:
// return Object.keys(conteo).filter(k => conteo[+k] === Math.max(...Object.values(conteo)));

console.log(masFrecuente([1, 1, 2, 3, 3, 3, 4])); // 3
