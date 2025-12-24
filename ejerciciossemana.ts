function invertirCadena(str: string): string {
  let resultado = ""
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i]
  }
  return resultado
}

function parentesisBalanceados(expresion: string): boolean {
  let pila: string[] = []
  for (let i = 0; i < expresion.length; i++) {
    if (expresion[i] === "(") pila.push("(")
    else if (expresion[i] === ")") {
      if (pila.length === 0) return false
      pila.pop()
    }
  }
  return pila.length === 0
}

class ColaImpresion {
  private cola: string[] = []
  agregar(doc: string) {
    this.cola.push(doc)
  }
  retirar(): string | undefined {
    return this.cola.shift()
  }
  contar(): number {
    return this.cola.length
  }
}

function primeraNoRepetida(str: string): string | null {
  let conteo: { [key: string]: number } = {}
  for (let i = 0; i < str.length; i++) {
    conteo[str[i]] = (conteo[str[i]] || 0) + 1
  }
  for (let i = 0; i < str.length; i++) {
    if (conteo[str[i]] === 1) return str[i]
  }
  return null
}

function eliminarDuplicados(arr: number[]): number[] {
  let resultado: number[] = []
  let visto: { [key: number]: boolean } = {}
  for (let i = 0; i < arr.length; i++) {
    if (!visto[arr[i]]) {
      visto[arr[i]] = true
      resultado.push(arr[i])
    }
  }
  return resultado
}

function rotarArreglo(arr: number[], k: number): number[] {
  let n = arr.length
  k = k % n
  return arr.slice(n - k).concat(arr.slice(0, n - k))
}

class HistorialNavegador {
  private backStack: string[] = []
  private forwardStack: string[] = []
  private current: string | null = null
  visit(url: string) {
    if (this.current) this.backStack.push(this.current)
    this.current = url
    this.forwardStack = []
  }
  back(): string | null {
    if (this.backStack.length === 0) return this.current
    this.forwardStack.push(this.current!)
    this.current = this.backStack.pop() || null
    return this.current
  }
  forward(): string | null {
    if (this.forwardStack.length === 0) return this.current
    this.backStack.push(this.current!)
    this.current = this.forwardStack.pop() || null
    return this.current
  }
  getCurrent(): string | null {
    return this.current
  }
}

function contadorPalabras(texto: string): { [key: string]: number } {
  let palabras = texto.split(" ")
  let conteo: { [key: string]: number } = {}
  for (let i = 0; i < palabras.length; i++) {
    conteo[palabras[i]] = (conteo[palabras[i]] || 0) + 1
  }
  return conteo
}

function agruparAnagramas(palabras: string[]): string[][] {
  let mapa: { [key: string]: string[] } = {}
  for (let i = 0; i < palabras.length; i++) {
    let clave = palabras[i].split("").sort().join("")
    if (!mapa[clave]) mapa[clave] = []
    mapa[clave].push(palabras[i])
  }
  return Object.values(mapa)
}

type Tarea = { nombre: string; prioridad: number }

class ColaPrioridad {
  private tareas: Tarea[] = []
  enqueue(tarea: Tarea) {
    this.tareas.push(tarea)
    this.tareas.sort((a, b) => b.prioridad - a.prioridad)
  }
  dequeue(): Tarea | undefined {
    return this.tareas.shift()
  }
}

function doblarNumeros(arr: number[]): number[] {
  let resultado: number[] = []
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * 2)
  }
  return resultado
}

function filtrarMayores(arr: number[], n: number): number[] {
  let resultado: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) resultado.push(arr[i])
  }
  return resultado
}

function ordenarPorLongitud(arr: string[]): string[] {
  return arr.sort((a, b) => a.length - b.length)
}

function calcularPromedio(arr: number[]): number {
  let suma = 0
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i]
  }
  return suma / arr.length
}

function masFrecuente(arr: number[]): number | null {
  let conteo: { [key: number]: number } = {}
  let max = 0
  let num: number | null = null
  for (let i = 0; i < arr.length; i++) {
    conteo[arr[i]] = (conteo[arr[i]] || 0) + 1
    if (conteo[arr[i]] > max) {
      max = conteo[arr[i]]
      num = arr[i]
    }
  }
  return num
}
