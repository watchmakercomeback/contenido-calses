//*Historial de navegador
//Simula el historial de un navegador con las siguientes operaciones:
//  visit(url): visitar una nueva página.
//  back(): regresar a la página anterior.
//  forward(): avanzar a la página siguiente.

function visitURL( url: string, history: string[], currentIndex: number): {history: string[], currentIndex: number} {
    history = history.slice(0, currentIndex + 1);
    history.push(url);
    currentIndex++;
    return {history, currentIndex};
}

function back(history: string[], currentIndex: number): number {
    if (currentIndex > 0) {
        currentIndex--;
    }
    return currentIndex;
}

function forward(history: string[], currentIndex: number): number {
    if (currentIndex < history.length - 1) {
        currentIndex++;
    }
    return currentIndex;
}

let history: string[] = [];
let currentIndex = -1;

({history, currentIndex} = visitURL("page1.com", history, currentIndex));
({history, currentIndex} = visitURL("page2.com", history, currentIndex));
({history, currentIndex} = visitURL("page3.com", history, currentIndex));
console.log(history[currentIndex]); 

currentIndex = back(history, currentIndex);
console.log(history[currentIndex]); 

currentIndex = back(history, currentIndex);
console.log(history[currentIndex]); 

currentIndex = forward(history, currentIndex);
console.log(history[currentIndex]);        
({history, currentIndex} = visitURL("page4.com", history, currentIndex));
console.log(history[currentIndex]); 
currentIndex = forward(history, currentIndex);
console.log(history[currentIndex]); // Salida: page4.com (sin cambio, ya que no hay página adelante)
console.log(history); // Salida: [ 'page1.com', 'page2.com', 'page4.com' ]
export {};

function rotateArray(arr: number[], k: number): number[] {
    const n = arr.length;
    k = k % n; 
    return arr.slice(-k).concat(arr.slice(0, n - k));
}
const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray); // Salida: [4, 5, 1, 2, 3]
export {};