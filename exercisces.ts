    /**
     * 1. Invertir una cadena
     * Recibe un string y lo devuelve invertido.
     */
    function invertirCadena(cadena: string): string {
    return cadena.split('').reverse().join('');
    }

    /**
     * 2. Verificar paréntesis balanceados
     * Implementa una función que determine si una expresión matemática
     * tiene los paréntesis correctamente balanceados usando una pila.
     */
    function verificarParentesis(expresion: string): boolean {
    const pila: string[] = [];
    for (const char of expresion) {
        if (char === '(') {
        pila.push(char);
        } else if (char === ')') {
        if (pila.length === 0) {
            return false;
        }
        pila.pop();
        }
    }
    return pila.length === 0;
    }

    /**
     * 3. Cola de impresión
     * Simula una cola de impresión con las operaciones de agregar,
     * retirar y contar documentos.
     */
    class ColaImpresion {
    private documentos: string[] = [];

    agregarDocumento(documento: string): void {
        console.log(`Agregando documento: "${documento}" a la cola.`);
        this.documentos.push(documento);
    }

    retirarDocumento(): string | undefined {
        const documento = this.documentos.shift();
        if (documento) {
        console.log(`Retirando y procesando documento: "${documento}".`);
        } else {
        console.log('No hay documentos en la cola.');
        }
        return documento;
    }

    contarDocumentos(): number {
        return this.documentos.length;
    }
    }

    /**
     * 4. Primera letra no repetida
     * Encuentra la primera letra en un string que no se repite.
     */
    function primeraLetraNoRepetida(cadena: string): string | undefined {
    const frecuencia = new Map<string, number>();
    for (const char of cadena) {
        frecuencia.set(char, (frecuencia.get(char) || 0) + 1);
    }

    for (const char of cadena) {
        if (frecuencia.get(char) === 1) {
        return char;
        }
    }
    return undefined;
    }

    /**
     * 5. Eliminar duplicados de un arreglo
     * Usa un Set para eliminar de manera eficiente los elementos duplicados.
     */
    function eliminarDuplicados<T>(arreglo: T[]): T[] {
    return [...new Set(arreglo)];
    }

    /**
     * 6. Rotación de un arreglo
     * Rota un arreglo hacia la derecha k veces.
     */
    function rotarArreglo<T>(arreglo: T[], k: number): T[] {
    const rotaciones = k % arreglo.length;
    if (rotaciones === 0) {
        return arreglo;
    }
    // Tomamos los últimos 'rotaciones' elementos
    const parteFinal = arreglo.slice(arreglo.length - rotaciones);
    // Y los elementos restantes
    const parteInicial = arreglo.slice(0, arreglo.length - rotaciones);
    // Unimos ambas partes
    return [...parteFinal, ...parteInicial];
    }

    /**
     * 7. Historial de navegador
     * Simula el historial de navegación usando dos pilas para
     * retroceder y avanzar.
     */
    class HistorialNavegador {
    private historialBack: string[] = [];
    private historialForward: string[] = [];
    private paginaActual: string | null = null;

    visit(url: string): void {
        if (this.paginaActual) {
        this.historialBack.push(this.paginaActual);
        }
        this.paginaActual = url;
        this.historialForward = [];
        console.log(`Visitando: ${url}`);
    }

    back(): string | null {
        if (this.historialBack.length === 0 || !this.paginaActual) {
        console.log("No se puede retroceder más.");
        return null;
        }
        this.historialForward.push(this.paginaActual);
        this.paginaActual = this.historialBack.pop()!;
        console.log(`Retrocediendo a: ${this.paginaActual}`);
        return this.paginaActual;
    }

    forward(): string | null {
        if (this.historialForward.length === 0 || !this.paginaActual) {
        console.log("No se puede avanzar más.");
        return null;
        }
        this.historialBack.push(this.paginaActual);
        this.paginaActual = this.historialForward.pop()!;
        console.log(`Avanzando a: ${this.paginaActual}`);
        return this.paginaActual;
    }
    }

    /**
     * 8. Contador de palabras
     * Cuenta la frecuencia de cada palabra en un párrafo.
     */
    function contadorDePalabras(parrafo: string): Map<string, number> {
    const palabras = parrafo.toLowerCase().match(/\b\w+\b/g) || [];
    const conteo = new Map<string, number>();
    for (const palabra of palabras) {
        conteo.set(palabra, (conteo.get(palabra) || 0) + 1);
    }
    return conteo;
    }

    /**
     * 9. Agrupar anagramas
     * Agrupa palabras que son anagramas (contienen las mismas letras).
     */
    function agruparAnagramas(palabras: string[]): string[][] {
    const mapa = new Map<string, string[]>();
    for (const palabra of palabras) {
        const clave = palabra.split('').sort().join('');
        if (!mapa.has(clave)) {
        mapa.set(clave, []);
        }
        mapa.get(clave)!.push(palabra);
    }
    return Array.from(mapa.values());
    }

    /**
     * 10. Cola de tareas con prioridad
     * Implementa una cola que siempre extrae la tarea con la
     * mayor prioridad.
     */
    interface Tarea {
    nombre: string;
    prioridad: number;
    }

    class ColaPrioridad {
    private tareas: Tarea[] = [];

    enqueue(tarea: Tarea): void {
        console.log(`Encolando tarea: ${tarea.nombre} con prioridad ${tarea.prioridad}`);
        this.tareas.push(tarea);
        // Ordenar de mayor a menor prioridad al encolar
        this.tareas.sort((a, b) => b.prioridad - a.prioridad);
    }

    dequeue(): Tarea | undefined {
        const tarea = this.tareas.shift();
        if (tarea) {
        console.log(`Desencolando tarea con mayor prioridad: ${tarea.nombre}`);
        } else {
        console.log("No hay tareas en la cola.");
        }
        return tarea;
    }
    }

    // Ejercicios Extra de Arreglos
    // ---

    /**
     * 11. Doblar los números
     * Devuelve un nuevo arreglo con cada número multiplicado por 2.
     */
    function doblarNumeros(numeros: number[]): number[] {
    return numeros.map(numero => numero * 2);
    }

    /**
     * 12. Filtrar mayores a un valor
     * Devuelve un arreglo con solo los números mayores que un valor dado.
     */
    function filtrarMayores(numeros: number[], n: number): number[] {
    return numeros.filter(numero => numero > n);
    }

    /**
     * 13. Ordenar palabras por longitud
     * Ordena un arreglo de strings de menor a mayor longitud.
     */
    function ordenarPorLongitud(palabras: string[]): string[] {
    return palabras.sort((a, b) => a.length - b.length);
    }

    /**
     * 14. Calcular promedio
     * Calcula el promedio de todos los valores en un arreglo.
     */
    function calcularPromedio(numeros: number[]): number {
    if (numeros.length === 0) {
        return 0;
    }
    const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    return suma / numeros.length;
    }

    /**
     * 15. Encontrar el número más frecuente
     * Encuentra el número que más se repite en un arreglo.
     */
    function encontrarMasFrecuente(numeros: number[]): number | undefined {
    if (numeros.length === 0) {
        return undefined;
    }

    const frecuencia = new Map<number, number>();
    for (const num of numeros) {
        frecuencia.set(num, (frecuencia.get(num) || 0) + 1);
    }

    let numeroMasFrecuente: number = numeros[0];
    let maxFrecuencia: number = 0;

    for (const [num, freq] of frecuencia.entries()) {
        if (freq > maxFrecuencia) {
        maxFrecuencia = freq;
        numeroMasFrecuente = num;
        }
    }
    return numeroMasFrecuente;
    }
