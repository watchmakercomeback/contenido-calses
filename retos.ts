
// --- Reverse text ---
type Text = string;

function reverseText(input: Text): Text {
    return input.split('').reverse().join('');
}

const word: Text = "arroz";
const reversed: Text = reverseText(word);

console.log("\n===== Reverse Text =====");
console.log("Palabra original:", word);
console.log("Palabra reversada:", reversed);


// --- Balance de paréntesis ---
function isBalanced(expr: string): boolean {
    let count = 0;
    for (const char of expr) {
        if (char === "(") count++;
        if (char === ")") {
            if (count === 0) return false;
            count--;
        }
    }
    return count === 0;
}

console.log("\n===== Balance de Paréntesis =====");
console.log("(a+b)) ->", isBalanced("(a+b))"));
console.log("(a+b)  ->", isBalanced("(a+b)"));
console.log(")))((( ->", isBalanced(")))((("));


// --- Cola de impresora ---
type PrintDoc = { title: string; pages: number };

class PrintQueue {
    private queue: PrintDoc[] = [];

    enqueue(doc: PrintDoc): void { this.queue.push(doc); }
    dequeue(): PrintDoc | undefined { return this.queue.shift(); }
    peek(): PrintDoc | undefined { return this.queue[0]; }
    size(): number { return this.queue.length; }
    isEmpty(): boolean { return this.queue.length === 0; }
}

const pqClass = new PrintQueue();
pqClass.enqueue({ title: "informe.pdf", pages: 10 });
pqClass.enqueue({ title: "foto.png", pages: 1 });
pqClass.enqueue({ title: "tarea.docx", pages: 5 });
pqClass.enqueue({ title: "resumen.txt", pages: 2 });

console.log("\n===== Cola de Impresora =====");
console.log("Estado inicial:");
console.table(pqClass);

while (!pqClass.isEmpty()) {
    console.log("Siguiente a imprimir:", pqClass.peek());
    console.log("Imprimiendo:", pqClass.dequeue());
    console.log("Tamaño después:", pqClass.size());
}
console.log("Cola vacía. Fin de impresiones.");


// --- Primera letra no repetida ---
const firstUnique = (str: string): string | undefined => {
    for (const char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return undefined;
};

console.log("\n===== Primera letra no repetida =====");
console.log("swwiissa ->", firstUnique("swwiissa"));
console.log("aabbcc   ->", firstUnique("aabbcc"));
console.log("tyyppeessccrript ->", firstUnique("tyyppeessccrript"));


// --- Eliminar duplicados ---
function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

console.log("\n===== Eliminar duplicados =====");
console.log("Num original:", [1, 2, 2, 3, 4, 4, 5]);
console.log("Sin duplicados:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log("Str original:", ["a", "b", "a", "c"]);
console.log("Sin duplicados:", removeDuplicates(["a", "b", "a", "c"]));


// --- Rotación de un arreglo ---
function rotateArray(nums: number[], k: number): number[] {
    const n = nums.length;
    const steps = k % n;
    return nums.slice(-steps).concat(nums.slice(0, n - steps));
}

console.log("\n===== Rotación de un arreglo =====");
const arrToRotate = [1, 2, 3, 4, 5];
const k = 2;
console.log("Array original:", arrToRotate);
console.log(`Rotado ${k} veces a la derecha:`, rotateArray(arrToRotate, k));


// --- Historial de Navegador ---
class BrowserHistory {
    private current: string | null = null;
    private backStack: string[] = [];
    private forwardStack: string[] = [];

    visit(url: string): void {
        if (this.current) this.backStack.push(this.current);
        this.current = url;
        this.forwardStack = [];
        console.log("Visitando:", this.current);
    }

    back(): void {
        if (!this.backStack.length) return console.log("No hay páginas atrás");
        this.forwardStack.push(this.current!);
        this.current = this.backStack.pop()!;
        console.log("Volviendo atrás:", this.current);
    }

    forward(): void {
        if (!this.forwardStack.length) return console.log("No hay páginas adelante");
        this.backStack.push(this.current!);
        this.current = this.forwardStack.pop()!;
        console.log("Avanzando adelante:", this.current);
    }

    showHistory(): void {
        console.log("\n=== Estado del Historial ===");
        console.log("Atrás:", this.backStack);
        console.log("Actual:", this.current);
        console.log("Adelante:", this.forwardStack);
        console.log("============================\n");
    }

    getCurrent(): string | null {
        return this.current;
    }
}

console.log("\n===== Historial de Navegador =====");
const history = new BrowserHistory();
history.visit("google.com");
history.visit("openai.com");
history.visit("github.com");
history.showHistory();
history.back(); history.showHistory();
history.back(); history.showHistory();
history.forward(); history.showHistory();


// --- Contador de palabras ---
function wordCounter(text: string): Record<string, number> {
    return text.split(" ").reduce<Record<string, number>>((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

console.log("\n===== Contador de palabras =====");
console.log(wordCounter("hola mundo hola typescript"));


// --- Agrupar anagramas ---
function groupAnagrams(words: string[]): string[][] {
    const map: Record<string, string[]> = {};
    words.forEach(word => {
        const key = word.split("").sort().join("");
        if (!map[key]) map[key] = [];
        map[key].push(word);
    });
    return Object.values(map);
}

console.log("\n===== Agrupar Anagramas =====");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


// --- Cola con prioridad ---
type Task = { nombre: string; prioridad: number };

class PriorityQueue {
    private tasks: Task[] = [];

    enqueue(task: Task): void {
        this.tasks.push(task);
    }

    dequeue(): Task | undefined {
        if (!this.tasks.length) return undefined;

        let maxIndex = 0;
        this.tasks.forEach((t, i) => {
            if (t.prioridad > this.tasks[maxIndex]!.prioridad) {
                maxIndex = i;
            }
        });

        return this.tasks.splice(maxIndex, 1)[0];
    }
}

console.log("\n===== Cola con Prioridad =====");
const pq = new PriorityQueue();
pq.enqueue({ nombre: "Tarea A", prioridad: 1 });
pq.enqueue({ nombre: "Tarea B", prioridad: 5 });
pq.enqueue({ nombre: "Tarea C", prioridad: 3 });
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());


// --- Utilidades numéricas ---
function doubleNumbers(nums: number[]): number[] {
    return nums.map(num => num * 2);
}
console.log("\n===== Doblar Números =====");
console.log(doubleNumbers([1, 2, 3, 4]));

function filterGreater(nums: number[], n: number): number[] {
    return nums.filter(num => num > n);
}
console.log("\n===== Filtrar Mayores =====");
console.log(filterGreater([1, 5, 8, 3, 10], 5));

function sortByLength(words: string[]): string[] {
    return words.sort((a, b) => a.length - b.length);
}
console.log("\n===== Ordenar por Longitud =====");
console.log(sortByLength(["sol", "mar", "estrella", "luz"]));

function average(nums: number[]): number {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}
console.log("\n===== Promedio =====");
console.log(average([4, 8, 6, 10]));

function mostFrequent(arr: number[]): number {
    const freq: { [key: number]: number } = {};
    for (const num of arr) {
        freq[num] = (freq[num] ?? 0) + 1;
    }

    const masRepetida = Object.keys(freq).reduce((a, b) =>
        (freq[+a] ?? 0) >= (freq[+b] ?? 0) ? a : b
    );

    return +masRepetida;
}

console.log("\n===== Más Frecuente =====");
console.log(mostFrequent([1, 3, 2, 3, 4, 3, 5, 2]));