/*Historial de navegador
Simula el historial de un navegador con las siguientes operaciones:*/

class historial{
    private adelante: string[] = [];
    private atras: string[] = [];
    private actual: string | null = null;

    visitar(url:string):void{
        if(this.actual){
            this.atras.push(this.actual);
        }
        this.actual = url;
        this.adelante = [];
    }

    back(): void {
    if (this.atras.length === 0) {
        console.log("No hay páginas atrás");
        return;
    }
    this.adelante.push(this.actual!);
    this.actual = this.atras.pop()!;
    }


    forward(): void {
    if (this.adelante.length === 0) {
        console.log("No hay páginas adelante");
        return;
    }
    this.atras.push(this.actual!);
    this.actual = this.adelante.pop()!;
    }


    getActual():string | null{
        return this.actual;
    }
}

// Ejemplo de uso
const navegador = new historial();

navegador.visitar("google.com");
console.log(navegador.getActual()); // google.com

navegador.visitar("github.com");
console.log(navegador.getActual()); // github.com

navegador.back();
console.log(navegador.getActual()); // google.com

navegador.forward();
console.log(navegador.getActual()); // github.com

navegador.back();
navegador.back(); // No hay paginas atras
console.log(navegador.getActual()); // google.com

navegador.forward();
navegador.forward(); // No hay paginas adelante
console.log(navegador.getActual()); // github.com

navegador.visitar("stackoverflow.com");
console.log(navegador.getActual()); // stackoverflow.com

navegador.forward(); // No hay paginas adelante
console.log(navegador.getActual()); // stackoverflow.com

navegador.back();
console.log(navegador.getActual()); // github.com

navegador.back();
console.log(navegador.getActual()); // google.com

navegador.back(); // No hay paginas atras
console.log(navegador.getActual()); // google.com