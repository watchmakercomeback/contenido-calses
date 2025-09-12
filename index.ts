// 1.
function Cadena(texto: string): string {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}

console.log(Cadena("hola"));

// 2.
function balaceado(expresion: string): boolean {
  let pila: string[] = [];

  for (let char of expresion) {
    if (char === "(") {
      pila.push(char);
    } else if (char === ")") {
      if (pila.length === 0) return false;
      pila.pop();
    }
  }

  return pila.length === 0;
}

console.log(balaceado("(a+b)"));
console.log(balaceado("(a+b))"));

// 3.
class Cola0 {
  private cola: string[] = []; 

  agregar(documento: string): void {
    this.cola.push(documento);
    console.log(`Documento agregado: ${documento}`);
  }

  retirar(): string | undefined {
    if (this.cola.length === 0) {
      console.log("No hay documentos en la cola.");
      return undefined;
    }
    const doc = this.cola.shift(); 
    console.log(`Documento impreso: ${doc}`);
    return doc;
  }

  contar(): number {
    return this.cola.length;
  }

  mostrar(): void {
    console.log("Cola actual:", this.cola);
  }
}

const impresora = new Cola0();

impresora.agregar("Documento1.pdf");
impresora.agregar("Documento2.docx");
impresora.agregar("Documento3.pptx");

impresora.mostrar(); 

impresora.retirar(); 
impresora.mostrar(); 

console.log("Total en cola:", impresora.contar()); 


// 4.
function NoRepetida(nombre: string): string | null {
  for (let i = 0; i < nombre.length; i++) {
    let letra = nombre[i];
    if (nombre.indexOf(letra) === nombre.lastIndexOf(letra)) {
      return letra; 
    }
  }
  return null; 
}

console.log(NoRepetida("hhoolaa"));

// 5.
function eliminar(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log(eliminar([1, 2, 2, 3, 4, 4, 5])); 

// 6.
function rotar(arr: number[], k: number): number[] {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotar([1, 2, 3, 4, 5], 2)); 

// 7.
class Historial {
  private atras: string[] = [];
  private adelante: string[] = [];
  private actual: string | null = null;

  visit(url: string) {
    if (this.actual) this.atras.push(this.actual);
    this.actual = url;
    this.adelante = [];
  }

  back() {
    if (this.atras.length > 0) {
      this.adelante.push(this.actual!);
      this.actual = this.atras.pop()!;
    }
    return this.actual;
  }

  forward() {
    if (this.adelante.length > 0) {
      this.atras.push(this.actual!);
      this.actual = this.adelante.pop()!;
    }
    return this.actual;
  }
}

const navegador = new Historial();
navegador.visit("google.com");
console.log(navegador.back());
console.log(navegador.forward()); 

// 8.
function contar(texto: string): Record<string, number> {
  let palabras = texto.split(" ");
  let contador: Record<string, number> = {};

  for (let p of palabras) {
    contador[p] = (contador[p] || 0) + 1;
  }

  return contador;
}

console.log(contar("hola mundo hola typescript"));

// 9.
function agrupar(palabras: string[]): string[][] {
  let mapa: Record<string, string[]> = {};

  for (let palabra of palabras) {
    let clave = palabra.split("").sort().join("");
    if (!mapa[clave]) mapa[clave] = [];
    mapa[clave].push(palabra);
  }

  return Object.values(mapa);
}

console.log(agrupar(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 10.
interface Tarea {
  nombre: string;
  prioridad: number;
}

class Cola {
  private tareas: Tarea[] = [];

  enqueue(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  dequeue(): Tarea | undefined {
    if (this.tareas.length === 0) return undefined;
    let mayor = this.tareas.reduce((a, b) =>
      a.prioridad > b.prioridad ? a : b
    );
    this.tareas = this.tareas.filter((t) => t !== mayor);
    return mayor;
  }
}

const cola = new Cola();
cola.enqueue({ nombre: "A", prioridad: 1 });
cola.enqueue({ nombre: "B", prioridad: 5 });
console.log(cola.dequeue()); 

// 11.
function doblar(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}

console.log(doblar([1, 2, 3, 4]));

// 12.
function mayores(arr: number[], n: number): number[] {
  return arr.filter((num) => num > n);
}

console.log(mayores([1, 5, 8, 3, 10], 5)); 

// 13.
function Longitud(arr: string[]): string[] {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(Longitud(["soll", "marrr", "estrella", "luz"]));

// 14.
function promedio(arr: number[]): number {
  let suma = arr.reduce((a, b) => a + b, 0);
  return suma / arr.length;
}

console.log(promedio([4, 8, 6, 10])); // 7

// 15.
function Frecuente(arr: number[]): number {
  let contador: Record<number, number> = {};

  for (let num of arr) {
    contador[num] = (contador[num] || 0) + 1;
  }

  let maxNum = arr[0];
  for (let num in contador) {
    if (contador[+num] > contador[maxNum]) {
      maxNum = +num;
    }
  }

  return maxNum;
}

console.log(Frecuente([1, 3, 2, 3, 4, 3, 5, 2])); 
