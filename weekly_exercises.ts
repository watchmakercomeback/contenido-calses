/*
    Taller de Repaso – Estructuras de Datos y Arreglos en TypeScript.

    Resuelve los siguientes ejercicios en TypeScript. Cada problema requiere pensar en cómo almacenar, manipular y procesar la información de manera eficiente.

    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Review Workshop – Data Structures and Arrays in TypeScript.

    Solve the following exercises in TypeScript. Each problem requires you to think about how to store, manipulate, and process information efficiently.
*/

// : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :

// 1. Invertir una cadena: Crear una función que reciba un string y devuelva ese mismo string invertido.

// Proceso. / Process.
function investChain (text: string): string {
    return text.split("").reverse().join("");
}

// Salida. / Output.
console.log(investChain("Typescript"));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 2. Verificar paréntesis balanceados: Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.

// Proceso. / Process.
function verifyParentesis(text2: string): boolean {
    let stack: string[] = [];
    
    for (let char of text2) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
}

// Salida. / Output.
const correct: boolean = verifyParentesis("(a+b)");
const incorrect: boolean = verifyParentesis("(a+b))");

console.log(`El texto "(a+b)" es: ${correct}`);
console.log(`El texto "(a+b))" es: ${incorrect}`);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 3. Cola de impresión: Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.

// Proceso. / Process.
class Print {
    private cola: string[] = [];

    addDocument(doc: string): void {
        this.cola.push(doc);

        console.log(`${doc} agregado correctamente.`);
    }

    printDocument(): void {
        if (this.cola.length === 0) {
            console.log("Aún no se ha cargado ningún documento a la cola.");
            return;
        }

        const doc = this.cola.shift();
        
        console.log(`Imprimiendo: ${doc}`);
    }

    countDocuments(): number {
        if (this.cola.length === 0) {
            console.log("Aún no se ha cargado ningún documento a la cola.");
        }

        return this.cola.length
    };
};

// Salida. / Output.
const printer = new Print();

printer.addDocument("Styles.css");
printer.addDocument("Typescript.ts");
printer.addDocument("Portfolio.html");

console.log(`Documentos existentes en la cola: ${printer.countDocuments()}`);

/* printer.printDocument();
console.log(`Documentos existentes en la cola: ${printer.countDocuments()}`);

printer.printDocument();
printer.printDocument();
printer.printDocument(); */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 4. Primera letra no repetida: Dado un string, encuentra la primera letra que no se repite.

// Proceso. / Process.
function firstTimeOnly(text3: string): string | null {
    let count3: {[key: string]: number} = {};

    for (let char3 of text3) {
        count3[char3] = (count3[char3] || 0) + 1;
    };

    for (let char3 of text3) {
        if (count3[char3] === 1) {
            return char3;
        }
    }

    return null;
}

// Salida. / Output.
console.log(firstTimeOnly("assww")); // <-- a 
console.log(firstTimeOnly("aasww")); // <-- s
console.log(firstTimeOnly("aassw")); // <-- w

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 5. Eliminar duplicados de un arreglo: Escribe una función que elimine los duplicados de un arreglo.

// Proceso. / Process.
function removeDuplicates(number5: number[]): number[] {
    return [...new Set(number5)];
}

// Salida. / Output.
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 6. Rotación de un arreglo: Dado un arreglo y un número k, rota el arreglo hacia la derecha k veces.

// Proceso. / Process.
function rotateArray(arr6: number[], k: number): number[] {
    k = k % arr6.length;

    return arr6.slice(-k).concat(arr6.slice(0, -k))
}

// Salida. / Output.
console.log(rotateArray([1, 2, 3, 4, 5], 3));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 7. Historial de navegador: Simula el historial de un navegador con las siguientes operaciones:

/*
- visit(url): visitar una nueva página.
- back(): regresar a la página anterior.
- forward(): avanzar a la página siguiente.
*/

// Proceso. / Process.
class browserHistory {
    private backStack: string[] = [];
    private forwardStack: string[] = [];
    private current: string | null = null;

    visit(url: string): void {
        if (this.current) {
            this.backStack.push(this.current);
        }

        this.current = url;
        this.forwardStack = [];

        console.log(`Visitando: ${url}`);
    };

    back(): void {
        if (this.backStack.length === 0) {
            console.log("No hay páginas anteriormente visitadas.");
            return;
        }

        this.forwardStack.push(this.current!);
        this.current = this.backStack.pop()!;

        console.log(`Regresando a: ${this.current}`);
    };

    forward(): void {
        if (this.forwardStack.length === 0) {
            console.log("No hay páginas para visitar.");
            return;
        }

        this.backStack.push(this.current!);
        this.current = this.forwardStack.pop()!;

        console.log(`Avanzando a la siguiente página: ${this.current}`);
    };
};

// Salida. / Output.
const browser = new browserHistory();

browser.visit("google.com");
browser.visit("moodle.com");
browser.back();
browser.forward();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 8. Contador de palabras: Dado un párrafo, cuenta cuántas veces aparece cada palabra.

// Proceso. / Process.
function countWords(text8: string): Record<string, number> {
    let count8: Record<string, number> = {};

    for (let word of text8.split(" ")) {
        count8[word] = (count8[word] || 0) +1;
    }

    return count8;
}

// Salida. / Output.
console.log(countWords("hola mundo hola typescript"));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 9. Agrupar anagramas: Dado un arreglo de palabras, agrúpalas en listas de anagramas.

// Proceso. / Process.
function groupAnagrams(words: string[]): string[][] {
    let map: Record<string, string[]> = {};

    for (let word of words) {
        let key = word.split("").sort().join("");

        if (!map[key]) map[key] = [];
        map[key].push(word);
    }

    return Object.values(map);
}

// Salida. / Output.
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 10. Cola de tareas con prioridad: Crea una cola de tareas en donde cada tarea tiene un nombre y una prioridad.
// La operación de extracción debe devolver siempre la tarea con mayor prioridad.

// Proceso. / Process.
type Task = {
    name: string;
    priority: number
}

class priorityLevel {
    private cola10: Task[] = [];

    enqueue(task10: Task): void {
        this.cola10.push(task10)
    }

    dequeue(): Task | null {
        if (this.cola10.length === 0) {
            return null;
        } 

        let max = this.cola10.reduce((a, b) => (a.priority ? a : b));
        this.cola10 = this.cola10.filter(t => t !== max);

        return max;
    }
}

// Salida. / Output.
const cola10 = new priorityLevel();

cola10.enqueue({name: "Tarea 1", priority: 1})
cola10.enqueue({name: "Tarea 2", priority: 9})
cola10.enqueue({name: "Tarea 3", priority: 4})

console.log(cola10.dequeue());

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");
// : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Ejercicios Extra de Arreglos.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 11. Doblar los números: Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.

// Proceso. / Process.
function doubleNumbers(arr11: number[]): number[] {
    return arr11.map(num => num * 2);
}

// Salida. / Output.
console.log(doubleNumbers([2, 4, 6]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 12. Filtrar mayores a un valor: Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.

// Proceso. / Process.
function filterLargerNumbers(arr12: number[], n: number): number[] {
    return arr12.filter(num => num > n);
}

// Salida. / Output.
console.log(filterLargerNumbers([1, 5, 8, 20], 2));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 13. Ordenar palabras por longitud: Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.

// Proceso. / Process.
function orderByLength(arr13: string[]): string[] {
    return arr13.sort((a, b) => a.length - b.length);
}

// Salida. / Output.
console.log(orderByLength(["sol", "mar", "estrella", "luna"]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 14. Calcular promedio: Dado un arreglo de números, calcula el promedio de todos sus valores.

// Proceso. / Process.
function average(arr14: number[]): number {
    const sum = arr14.reduce((acc, num) => acc + num, 0);
    return sum / arr14.length;
}

// Salida. / Output.
console.log(average([2, 5, 10]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// 15. Encontrar el número más frecuente: Dado un arreglo de números, encuentra el número que más veces se repite.

// Proceso. / Process.
function moreFrequent(arr15: number[]): number | null {
    let count15: Record<number, number> = {};
    
    for (let num of arr15) {
        count15[num] = (count15[num] || 0) + 1;
    }

    let maxNum: number | null = null;
    let maxFrequency = 0;

    for (let [num, frequency] of Object.entries(count15)) {
        const n = +num;  // Convertimos la clave (string) a número
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            maxNum = n;
        }
    }

    return maxNum;
}


// Salida. / Output.
console.log(moreFrequent([1, 3, 2, 3, 4, 3, 5, 2]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -