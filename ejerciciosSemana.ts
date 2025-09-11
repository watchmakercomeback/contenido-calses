//Ejercicio #1: Crea una función que reciba un string y devuelva ese mismo string invertido.
function invertir(str: string): string{
    return [str].reverse().join("");
}

//Ejercicio #2: Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.
function esCorrecta(str: string): boolean {
    let str2: string[] = []
    let counter: number = 0
    for (let i = 0; i < str.length; i++) {
        str2.push(str.charAt(i));
        if ((str2[-1] == ")" && str2[0] == "(" ) || (str2[i] !== "(" || str2[i] !== ")")) {
            counter++
        }
    }
    return counter % 2 === 0;
}

//Ejercicio #3: Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.
const arrayImp: string[] = [];

function imprimirDocs (num: number, arr: string[]) {
    for (let i = 0; i < num; i++) {
        arrayImp.push(arr[i]);
    }
    return console.log("Lista de documentos: " + arrayImp);
}

function agregarDocs (num: number, arr: string[]) {
    for (let i = 0; i < num; i++) {
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

//Ejercicio #5: Escribe una función que elimine los duplicados de un arreglo.
function eliminarDuplicados(arr: number[]): number[] {
    return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
}

//Ejercicio #6: Rotación de un arreglo
function rotar(arr: number[]) {
    return arr.toReversed()
}

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

//Ejercicio #11: Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.
function doble(arr: number[]) {
    let arreglo: number[] = []
    for (let i = 0; i < arr.length; i++) {
        arreglo[i] = arr[i]*2;
    }
    console.log(arreglo);
}

//Ejercicio #12: Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.
function mayores(arr: number[], n: number) {
    let mayor: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            mayor.push(arr[i]);
        }
    }
    console.log(mayor);
}

//Ejercicio #13: Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.
function ordenarPorLongitud(palabras: string[]): string[] {
    return palabras.sort((a, b) => a.length - b.length);
}


//Ejercicio #14: Dado un arreglo de números, calcula el promedio de todos sus valores.
function average(arr: number[]) {
    let mayor: number
    let counter: number = 0;
    for (let i = 0; i < arr.length; i++) {
        mayor = arr[i]+arr[i+1];
        counter++
    }
    console.log(mayor/counter);
}

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
