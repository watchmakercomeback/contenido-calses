//Ejercicio #1: Crea una función que reciba un string y devuelva ese mismo string invertido.
function invertir(str: string): string {
    return str.split("").reverse().join("");
}
console.log("La palabra hola invertida es: " + invertir("hola"));

//Ejercicio #2: Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.
function esCorrecta(str: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "(") {
            stack.push(char); // abrimos un paréntesis
        } else if (char === ")") {
            if (stack.length === 0) {
                return false; // hay un cierre sin apertura
            }
            stack.pop(); // cerramos un paréntesis abierto
        }
    }
    return stack.length === 0;
}

console.log("Expresión matemática ((a+b) es correcta? " + esCorrecta("((a+b)"))

//Ejercicio #3: Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.
const arrayImp: string[] = [];

function imprimirDocs (arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        arrayImp.push(arr[i]);
    }
    return console.log("Lista de documentos: " + arrayImp);
}

function agregarDocs (arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        arrayImp.push(arr[i]);
    }
    return console.log("Lista actualizada con docs agregados: " + arrayImp);
}

function retirarDocs (num: number) {
    for (let i = 0; i < num; i++) {
        arrayImp.pop()
    }
    return console.log("La lista de documentos actualizada: " + arrayImp);
}

function contarDocs () {
    let counter: number = 0
    for (let i = 0; i < arrayImp.length; i++) {
        counter++
    }
    return console.log("Hay un total de: " + counter + " documentos")
}

console.log(imprimirDocs(["1","2", "3"]));
console.log(agregarDocs(["4","5","6"]));
console.log(retirarDocs(2))
console.log(contarDocs())

//Ejercicio #4: Dado un string, encuentra la primera letra que no se repite.
function primeraLetra (str: string) {
    let arreglo: string[] = [...str]
    for (let i = 0; i < arreglo.length; i++) {
        const repeticiones = arreglo.filter(x => x === arreglo[i]);
        if (repeticiones.length === 1) {
            console.log(repeticiones[0]);
            break;
        }
    }
}

console.log("La primera letra de swiss que no se repite es: " + primeraLetra('swiss'))

//Ejercicio #5: Escribe una función que elimine los duplicados de un arreglo.
function eliminarDuplicados(arr: number[]): number[] {
    return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
}

console.log("El arreglo 1,2,3,4,4,4,5,5,5 sin duplicados es: " + eliminarDuplicados([1,2,3,4,4,4,5,5,5]));


//Ejercicio #6: Rotación de un arreglo
function rotar(arr: number[]) {
    return arr.reverse()
}

console.log("El arreglo 9,8,7,6,5,4 rotado es: " + rotar([9,8,7,6,5,4]));

//Ejercicio #7: Simula el historial de un navegador:
class BrowserHistory {
    private backStack: string[] = [];
    private forwardStack: string[] = [];
    private current: string | null = null;

    visit(url: string): void {
        if (this.current !== null) {
            this.backStack.push(this.current);
        }
        this.current = url;
        this.forwardStack = []; // al visitar, se borra el futuro
        console.log(`Visitando: ${this.current}`);
    }

    back(): void {
        if (this.backStack.length === 0) {
            console.log("No hay páginas anteriores.");
            return;
        }
        this.forwardStack.push(this.current!);
        this.current = this.backStack.pop()!;
        console.log(`Regresaste a: ${this.current}`);
    }

    forward(): void {
        if (this.forwardStack.length === 0) {
            console.log("No hay páginas siguientes.");
            return;
        }
        this.backStack.push(this.current!);
        this.current = this.forwardStack.pop()!;
        console.log(`Avanzaste a: ${this.current}`);
    }

    getCurrent(): string | null {
        return this.current;
    }
}

const history = new BrowserHistory();

history.visit("google.com");
history.visit("openai.com");
history.visit("github.com");

history.back();
history.back();
history.forward();
history.visit("typescriptlang.org");
history.forward();

//Ejercicio #8: Dado un párrafo, cuenta cuántas veces aparece cada palabra.
function contarPalabras(parrafo: string): Map<string, number> {
    const limpio = parrafo.toLowerCase().replace(/[.,;:!?¿¡()"]/g, "");
    const palabras = limpio.split(" ");

    const conteo = new Map<string, number>();

    for (const palabra of palabras) {
        if (palabra.trim() === "") continue; // ignorar vacíos
        conteo.set(palabra, (conteo.get(palabra) ?? 0) + 1);
    }
    return conteo;
}

const texto = "Hola mundo, hola TypeScript. El mundo de TypeScript es genial, genial!";

const resultado = contarPalabras(texto);

resultado.forEach((valor, palabra) => {
    console.log(`${palabra}: ${valor}`);
});


//Ejercicio #9: Agrupar anagramas
function agruparAnagramas(palabras: string[]): string[][] {
    const mapa = new Map<string, string[]>();
    for (const palabra of palabras) {
        const clave = palabra.split("").sort().join("");

        if (!mapa.has(clave)) {
            mapa.set(clave, []);
        }
        mapa.get(clave)!.push(palabra);
    }
    return Array.from(mapa.values());
}

const lista = ["roma", "amor", "perro", "ropa", "arop", "torre", "errot"];

const resultado2 = agruparAnagramas(lista);

console.log(resultado2);


//Ejercicio #10: Crea una cola de tareas en donde cada tarea tiene un nombre y una prioridad.
//La operación de extracción debe devolver siempre la tarea con mayor prioridad.
type Tarea = {
    nombre: string;
    prioridad: number;
};

class ColaPrioridad {
    private tareas: Tarea[] = [];

    add(nombre: string, prioridad: number): void {
        this.tareas.push({ nombre, prioridad });
        this.tareas.sort((a, b) => b.prioridad - a.prioridad);
    }

    extract(): Tarea | null {
        if (this.tareas.length === 0) {
            return null;
        }
        return this.tareas.shift()!; // shift() elimina el primero
    }

    listar(): void {
        console.log("Cola actual:", this.tareas);
    }
}

const cola = new ColaPrioridad();

cola.add("Hacer deploy ", 5);
cola.add("Revisar pull request ", 2);
cola.add("Corregir bug crítico ", 10);
cola.add("Actualizar documentación ", 1);

cola.listar();

console.log("Extrayendo: ", cola.extract());
console.log("Extrayendo: ", cola.extract());
cola.listar();


//Ejercicio #11: Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.
function doble(arr: number[]) {
    let arreglo: number[] = []
    for (let i = 0; i < arr.length; i++) {
        arreglo[i] = arr[i]*2;
    }
    return arreglo;
}

console.log("El arreglo [1,2,3,4,5] doble es igual a: " + doble([1,2,3,4,5]));



//Ejercicio #12: Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.
function mayores(arr: number[], n: number) {
    let mayor: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            mayor.push(arr[i]);
        }
    }
    return mayor;
}

console.log("lo números mayores que 4 en el arreglo [1,2,3,4,5,6,7,8] son: " + mayores([1,2,3,4,5,6,7,8], 4));


//Ejercicio #13: Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.
function ordenarPorLongitud(palabras: string[]): string[] {
    return palabras.sort((a, b) => a.length - b.length);
}

console.log("Ordenar arreglo de string [sol, mar, estrella, luz] seún longitud: " + ordenarPorLongitud(["sol", "mar", "estrella", "luz"]));


//Ejercicio #14: Dado un arreglo de números, calcula el promedio de todos sus valores.
function average(arr: number[]) {
    let mayor: number = 0;
    let counter: number = 0;
    let promedio: number = 0;
    for (let i = 0; i < arr.length; i++) {
        mayor = arr[i]+arr[i+1];
        counter++
    }
    promedio = mayor/counter;
    return promedio;
}

console.log("El promedio de [4, 8, 6, 10] es de: " + average([4, 8, 6, 10]));


//Ejercicio #15: Dado un arreglo de números, encuentra el número que más veces se repite.
function numeroMasFrecuente(arr: number[]): number | null {
    if (arr.length === 0) return null;

    const conteo = new Map<number, number>();

    for (const num of arr) {
        conteo.set(num, (conteo.get(num) ?? 0) + 1);
    }

    let maxNum = arr[0];
    let maxCount = 0;

    conteo.forEach((cantidad, numero) => {
        if (cantidad > maxCount) {
            maxCount = cantidad;
            maxNum = numero;
        }
    });
    return maxNum;
}

console.log("El número que más se repite en [1, 3, 2, 3, 4, 3, 5, 2] es: " + numeroMasFrecuente([1, 3, 2, 3, 4, 3, 5, 2]));
