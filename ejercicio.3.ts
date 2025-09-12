//Cola de impresión
//Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.
class Documento {
    constructor(public nombre: string, public paginas: number) {}
}

class ColaImpresion {
    private cola: Documento[] = [];

    agregarDocumento(doc: Documento): void {
        this.cola.push(doc);
        console.log(`Documento "${doc.nombre}" agregado a la cola.`);
    }

    imprimirDocumento(): void {
        if (this.cola.length === 0) {
            console.log("No hay documentos en la cola.");
            return;
        }
        const doc = this.cola.shift()!;
        console.log(`Imprimiendo documento "${doc.nombre}" con ${doc.paginas} páginas...`);
    }

    contarDocumentos(): number {
        return this.cola.length;
    }
}

const cola = new ColaImpresion();
cola.agregarDocumento(new Documento("Doc1", 5));
cola.agregarDocumento(new Documento("Doc2", 3));
console.log(`Documentos en la cola: ${cola.contarDocumentos()}`);


