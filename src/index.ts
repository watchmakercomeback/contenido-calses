// 1. Invertir una cadena
function invertirCadena (cadena : string): string {
    return cadena.split('').reverse().join('');
}

console.log("1.",invertirCadena("Programación")); 

// 2. Verificar paréntesis balanceados
function parentesisBalanceados(cadena: string): boolean {
    const stack: string[] = [];
    const apertura = ['(', '{', '['];
    const cierre = [')', '}', ']'];
    for (const char of cadena) {
        if (apertura.includes(char)) {
            stack.push(char);
        } else if (cierre.includes(char)) {
            const indice = cierre.indexOf(char);
            if (stack.length === 0 || stack.pop() !== apertura[indice]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log("2:", parentesisBalanceados("(a+b)")); 
console.log("2:", parentesisBalanceados("(a+b))")); 

// 3. Cola de impresión
class ColaImpresion {
    private cola: string[] = [];
    
    agregar(doc: string): void {
        this.cola.push(doc);
    }

    retirar(): string | undefined {
        return this.cola.shift();
    }

    contar(): number {
        return this.cola.length;
    }
}
const cola = new ColaImpresion();
cola.agregar("tipo1");
cola.agregar("tipo2");
console.log("3:", cola.retirar());
console.log("3:", cola.contar());

// 4. Primera letra no repetida
function primeraNoRepetida(texto: string): string | null {
  for (let char of texto) {
    if (texto.indexOf(char) === texto.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log("4:", primeraNoRepetida("sistema")); 

// 5. Eliminar duplicados de un arreglo
function eliminarDuplicados<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
console.log("5:", eliminarDuplicados([1, 2, 2, 3, 4, 4, 5, 5, 6]));

// 6. Rotación de un arreglo
function rotarArreglo<T>(arr: T[], k: number): T[] {
  const n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}
console.log("6:", rotarArreglo([1, 2, 3, 4, 5], 3));

// 7. Historial de navegador
class HistorialNavegador {
  private backStack: string[] = [];
  private forwardStack: string[] = [];
  private actual: string | null = null;

  visit(url: string) {
    if (this.actual) this.backStack.push(this.actual);
    this.actual = url;
    this.forwardStack = [];
  }

  back(): string | null {
    if (this.backStack.length === 0) return null;
    this.forwardStack.push(this.actual!);
    this.actual = this.backStack.pop()!;
    return this.actual;
  }

  forward(): string | null {
    if (this.forwardStack.length === 0) return null;
    this.backStack.push(this.actual!);
    this.actual = this.forwardStack.pop()!;
    return this.actual;
  }

  getActual(): string | null {
    return this.actual;
  }
}
const navegador = new HistorialNavegador();
navegador.visit("github.com");
navegador.visit("jira.com");
navegador.back();
console.log("7:", navegador.getActual()); 

// 8. Contador de palabras
function contadorPalabras(texto: string): Record<string, number> {
  const palabras = texto.split(" ");
  const contador: Record<string, number> = {};
  for (let palabra of palabras) {
    contador[palabra] = (contador[palabra] || 0) + 1;
  }
  return contador;
}
console.log("8:", contadorPalabras("hola mundo hola typescript en uso de typescript"));

// 9. Validar anagramas
function sonAnagramas(str1: string, str2: string): boolean {
  const formatear = (str: string) => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return formatear(str1) === formatear(str2);
}
console.log("9:", sonAnagramas("listen", "silent")); 
console.log("9:", sonAnagramas("hello", "world"));

// 10. Cola de tareas con prioridad
interface Tarea {
  nombre: string;
  prioridad: number;
}
class colaPrioridad {
  private tareas: Tarea[] = [];

  enqueue(tarea: Tarea): void {
    this.tareas.push(tarea);
    this.tareas.sort((a, b) => b.prioridad - a.prioridad);
  }
  
  dequeue(): Tarea | undefined {
    return this.tareas.shift();
  }
}
const colaTareas = new colaPrioridad();
colaTareas.enqueue({ nombre: "Tarea A", prioridad: 1 });
colaTareas.enqueue({ nombre: "Tarea B", prioridad: 5 });
console.log("10:", colaTareas.dequeue());

// 11. Doblar los números

const doblarNumeros = (arr: number[]): number[] => arr.map(num => num * 2);
console.log("11:", doblarNumeros([1,10,100,1000]));

// 12. Filtrar mayores a un valor
const filtrarMayores = (arr: number[], num: number): number[] => arr.filter(n => n > num);
console.log("12:", filtrarMayores([1, 5, 8, 3, 10], 5));

// 13. Ordenar palabras por longitud
const longitudPalabra = (arr: string[]): string[] => {
  return arr.sort((a,b) => a.length - b.length);
}
console.log("13:", longitudPalabra(["typescript", "es", "genial"]));

// 14. Calcular promedio
const promedio = (arr: number[]): number => {
  const suma = arr.reduce((acc, val) => acc + val, 0);
  return suma / arr.length;
}
console.log("14:", promedio([10, 20, 30, 40, 50]));

 // 15. Encontrar el número más frecuente
function numeroMasFrecuente(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  const contador: Record<number, number> = {};
  let maxNum = arr[0];
  let maxCount = 0;

  for (const num of arr) {
    contador[num] = (contador[num] || 0) + 1;
    if (contador[num] > maxCount) {
      maxCount = contador[num];
      maxNum = num;
    }
  }
  return maxNum;
}
console.log("15:", numeroMasFrecuente([1,3,2,3,4,3,5,2]));





















































