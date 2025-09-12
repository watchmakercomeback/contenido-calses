"use strict";
// 1. invertir una cadena
Object.defineProperty(exports, "__esModule", { value: true });
function Invertir(cadena) {
    console.log(cadena);
    return cadena.split("").reverse().join("");
}
console.log(Invertir("hola"));
// 2. verificar parentesisis balanceados
function Balanceado(expresion) {
    let stack = [];
    for (let char of expresion) {
        if (char === "(") {
            stack.push(char);
        }
        else if (char === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(Balanceado("(2+3)*(4-5)"));
console.log(Balanceado("2+3)*4"));
//# sourceMappingURL=index.js.map