/*Cola de impresión
Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos. */

class Impresora {
    private cola: string[] = [];

    agregar(documento: string): void {
        this.cola.push(documento);
    }

    retirar(): string | undefined {
        return this.cola.shift();
    }

    contar(): number {
        return this.cola.length;
    } 

    mostrar(): void {
        console.log("Nombres de documentos " + this.cola.join(", "));
    }
}

const impresora = new Impresora();

impresora.agregar("Documento1");
impresora.agregar("Documento2");
impresora.agregar("Documento3");

console.log("Numero de documentos en la cola de impresión: " + impresora.contar()); // 3
impresora.mostrar(); // Documento1, Documento2, Documento3

console.log("Imprimiendo: " + impresora.retirar()); // Documento1
console.log("Numero de documentos en la cola de impresión: " + impresora.contar()); // 3
impresora.mostrar(); // Documento2, Documento3

console.log("Imprimiendo: " + impresora.retirar()); // Documento2
console.log("Numero de documentos en la cola de impresión: " + impresora.contar()); // 2

impresora.agregar("Documento4");
console.log("agregando Documento4 a la cola");
console.log("Numero de documentos en la cola de impresión: " + impresora.contar()); // 3

impresora.mostrar(); // Documento3, Documento4