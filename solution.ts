// 1. Invertir una cadena
function invertirCadena(str: string): string {
  return str.split("").reverse().join("");
}

// 2. Verificar paréntesis balanceados
function parentesisBalanceados(expr: string): boolean {
  let balance = 0;
  for (const c of expr) {
    if (c === "(") balance++;
    else if (c === ")") {
      if (balance === 0) return false;
      balance--;
    }
  }
  return balance === 0;
}

// 3. Cola de impresión
class ColaImpresion {
  private cola: string[] = [];
  agregar(doc: string) { this.cola.push(doc); }
  retirar(): string | undefined { return this.cola.shift(); }
  contar(): number { return this.cola.length; }
}

// 4. Primera letra no repetida
function primeraNoRepetida(str: string): string | null {
  const mapa: Record<string, number> = {};
  for (const c of str) mapa[c] = (mapa[c] || 0) + 1;
  for (const c of str) if (mapa[c] === 1) return c;
  return null;
}

// 5. Eliminar duplicados de un arreglo
function eliminarDuplicados(arr: number[]): number[] {
  return [...new Set(arr)];
}

// 6. Rotación de un arreglo
function rotarArreglo(arr: number[], k: number): number[] {
  const n = arr.length;
  k %= n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// 7. Historial de navegador
class Historial {
  private atras: string[] = [];
  private adelante: string[] = [];
  private actual: string | null = null;

  visit(url: string) {
    if (this.actual) this.atras.push(this.actual);
    this.actual = url;
    this.adelante = [];
  }
  back(): string | null {
    if (!this.atras.length) return this.actual;
    this.adelante.push(this.actual!);
    this.actual = this.atras.pop()!;
    return this.actual;
  }
  forward(): string | null {
    if (!this.adelante.length) return this.actual;
    this.atras.push(this.actual!);
    this.actual = this.adelante.pop()!;
    return this.actual;
  }
  getActual(): string | null { return this.actual; }
}

// 8. Contador de palabras
function contarPalabras(texto: string): Record<string, number> {
  const palabras = texto.split(" ");
  const mapa: Record<string, number> = {};
  for (const p of palabras) mapa[p] = (mapa[p] || 0) + 1;
  return mapa;
}

// 9. Agrupar anagramas
function agruparAnagramas(palabras: string[]): string[][] {
  const mapa: Record<string, string[]> = {};
  for (const p of palabras) {
    const clave = p.split("").sort().join("");
    if (!mapa[clave]) mapa[clave] = [];
    mapa[clave].push(p);
  }
  return Object.values(mapa);
}

// 10. Cola de tareas con prioridad
type Tarea = { nombre: string; prioridad: number };

class ColaPrioridad {
  private cola: Tarea[] = [];
  enqueue(tarea: Tarea) {
    this.cola.push(tarea);
    this.cola.sort((a, b) => b.prioridad - a.prioridad);
  }
  dequeue(): Tarea | undefined {
    return this.cola.shift();
  }
}

// 11. Doblar los números
function doblarNumeros(arr: number[]): number[] {
  return arr.map(n => n * 2);
}

// 12. Filtrar mayores a un valor
function filtrarMayores(arr: number[], n: number): number[] {
  return arr.filter(x => x > n);
}

// 13. Ordenar palabras por longitud
function ordenarPorLongitud(arr: string[]): string[] {
  return arr.sort((a, b) => a.length - b.length);
}

// 14. Calcular promedio
function promedio(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// 15. Encontrar el número más frecuente
function masFrecuente(arr: number[]): number | null {
  const mapa: Record<number, number> = {};
  let maxNum = arr[0], maxCount = 0;
  for (const n of arr) {
    mapa[n] = (mapa[n] || 0) + 1;
    if (mapa[n] > maxCount) {
      maxCount = mapa[n];
      maxNum = n;
    }
  }
  return maxNum ?? null;
}