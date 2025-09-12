//Crea una función que reciba un string y devuelva ese mismo string invertido.
function reverseString(str:string):string {
    return str.split("").reverse().join("");
};

console.log(reverseString("Hola Mundo")); // Output: "odnuM aloH"

// Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.
function parentesis (str:string):boolean {
    let counter:number = 0;
    for (let i:number = 0; i < str.length; i++){
        if(str[i] === "("){
            counter += 1;
        } else if (str[i] === ")"){
            counter -= 1;
            if (counter < 0){
                return false;
            }
        } else {
            continue;
        }
    }
    if (counter !== 0) {
        return false;
    }
    return true;
}

console.log(parentesis("(a+b)"));


//Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.
class Impresion {
    private cola:string[] = [];

    public agregar(str:string){
        this.cola.push(str);
        return `agregaste: ${str}`;
    }

    public retirar(str:string){
        if(this.cola.includes(str)){
            for(let i:number = 0; i < this.cola.length; i++){
                if(this.cola[i] === str){
                    this.cola.splice(i,1);
                    return `documento eliminado`;
                }
            }
        }else{
            return `No existe ese documento`
        }
    }

    public contar(){
        return `Se tienen ${this.cola.length} docuementos agregaods`
    }

    public imprimir(){
        for(let i:number = 0; i < this.cola.length; i++){
            console.log(this.cola[i]);
        }
    }
}

const colaImpresion = new Impresion();

console.log(colaImpresion.agregar("Documento 1"));
console.log(colaImpresion.agregar("Documento 2"));
console.log(colaImpresion.contar());

colaImpresion.imprimir();

console.log(colaImpresion.retirar("Documento 1"));
console.log(colaImpresion.contar());

colaImpresion.imprimir();


// Dado un string, encuentra la primera letra que no se repite.
function nonRepeating(str:string):string{
    let foundChar:string = "";
    const charCount = new Map<string, number>();
    for(let i:number = 0; i < str.length; i++){
        charCount.set(str[i], (charCount.get(str[i]) || 0) + 1);
    }
    for (let i:number = 0; i < str.length; i++){
        if(charCount.get(str[i]) === 1) {
            foundChar = str[i];
            break;
        }
    }
    return foundChar;
}

console.log(nonRepeating("onomatopeya"));

//Escribe una función que elimine los duplicados de un arreglo.
function removeDuplicates<T>(arr:T[]):T[] {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5])); // Output: [1,2,3,4,5]

//Dado un arreglo y un número k, rota el arreglo hacia la derecha k veces.
function rotateArray<T>(arr:T[], k:number):T[] {
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1,2,3,4,5,6,7],3));


//Simula el historial de un navegador con las siguientes operaciones:
class navegacion {
    private history:string[] = ["homeURL"];
    private pos:number = 0;

    public visit(url:string) {
        this.history.push(url);
        this.pos = this.history.length -1;
    }

    public back() {
        if(this.pos === 0){
            return "no se puede regresar"
        } else {
            this.pos --;
            return `regreso a ${this.history[this.pos]}`;
        }
    }

    public forward() {
        if(this.history[this.pos + 1] === undefined){
            return "no se puede avanzar"
        } else {
            this.pos ++;
            return `regreso a ${this.history[this.pos]}`;
        }
    }
}

const navegacionRiwi = new navegacion();

//Dado un párrafo, cuenta cuántas veces aparece cada palabra.
function timesAppeared (str:string):Record<string,number> {
    let arr:string[] = str.split(" ");
    let test:Record <string,number> = {};
    for (let i:number = 0; i < arr.length; i++){
        test[arr[i]] ? test[arr[i]] ++ : test[arr[i]] = 1;
    }
    return test;
}

console.log(timesAppeared("hola mundo hola typescript"));

//Dado un arreglo de palabras, agrúpalas en listas de anagramas.
function anagramList (arr:string[]):string[][]{
    let group:Map<string, string[]> = new Map();
    arr.forEach((x)=>{
        let y:string = x.toLowerCase();
        y = y.split("").sort().join("");
        if(!group.has(y)){
            group.set(y,[])
        }
        group.get(y)!.push(x);
    })

    return Array.from(group.values());
}

console.log(anagramList(["eat", "tea", "tan", "ate", "nat", "bat"]));
//Crea una cola de tareas en donde cada tarea tiene un nombre y una prioridad.
//La operación de extracción debe devolver siempre la tarea con mayor prioridad.    
interface Tarea {
    nombre:string;
    prioridad:number;
}
class ColaPrioridad {
    private cola:Tarea[] = [];

    public enqueue(tarea: Tarea) {
        if(this.cola.length === 0){
            this.cola.push(tarea);
            return;
        } else {
            let insertado:boolean = false;
            for (let i:number = 0; i < this.cola.length; i++){
                if ( tarea.prioridad > this.cola[i].prioridad) {
                    this.cola.splice(i,0,tarea);
                    insertado = true;
                    break;
                }
            }
            if(!insertado){
                this.cola.push(tarea);
            }
        }
    }

    public dequeue(): Tarea | undefined {
        if(this.cola.length === 0){
            return undefined;
        } else {
            this.cola;
            return this.cola.shift();
        }
    }
}

const cola = new ColaPrioridad();
cola.enqueue({ nombre: "Tarea A", prioridad: 1 });
cola.enqueue({ nombre: "Tarea B", prioridad: 5 });
cola.enqueue({ nombre: "Tarea C", prioridad: 3 });

console.log(cola.dequeue()); // { nombre: 'Tarea B', prioridad: 5 }


//Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.
function increaseArr (arr:number[]):number[]{
    return arr.map((x) => x * 2);
}
console.log(increaseArr([1,2,3,4,5]));


//Dado un arreglo de números y un valor n, devuelve solo los números mayores que n.
function greaterThan (arr:number[], n:number):number[] {
    return arr.filter((x) => x > n);
}

console.log(greaterThan([1,2,3,4,5,6,7,8],5));
//Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.

function sortArr (arr:string[]):string[] {
    return arr.sort((a,b) => b.length - a.length);
}

console.log(sortArr(["apple", "banana", "kiwi", "strawberry", "fig"]));

//Dado un arreglo de números, calcula el promedio de todos sus valores.
function avgArr (arr:number[]):number{
    let avg:number = 0;
    let count:number = 0;
    for( let i:number = 0; i < arr.length; i++){
        avg += arr[i];
        count += 1;
    }
    return avg/count;
}

console.log(avgArr([1,2,3,4,5,6,7,8]));

//Dado un arreglo de números, encuentra el número que más veces se repite.
function repeatedNum (arr:number[]):number {
    let counter:Record<number,number> = {};
    let highest:number = 0;
    let count:number = 0;
    for(let i:number = 0; i < arr.length; i++){
        counter[arr[i]] ? counter[arr[i]]++ : counter[arr[i]] = 1;
    }
    for (let i:number = 0; i < arr.length; i++){
        if(counter[arr[i]] > count){
            highest = counter[arr[i]];
        }
    }
    return highest;
}

console.log(repeatedNum([1, 3, 2, 3, 4, 3, 5, 2]));