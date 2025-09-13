/*Verificar paréntesis balanceados
Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados. */

function areParenthesesBalanced(expr: string): boolean {
    let stack: string[] = [];
    let parentheses: { [key: string]: string } = { '(': ')', '{': '}', '[': ']' };

    for (let char of expr) {
        if (char in parentheses) {
            stack.push(char);
        } else if (Object.values(parentheses).includes(char)) {
            if (stack.length === 0) return false;
            let last = stack.pop();
            if (parentheses[last!] !== char) return false;
        }
    }
    return stack.length === 0;
}


console.log(areParenthesesBalanced("(a + b) * (c - d)")); // true
console.log(areParenthesesBalanced("(a + b)) * (c - d)")); // false
console.log(areParenthesesBalanced("{[()]}")); // true
console.log(areParenthesesBalanced("{[(])}")); // false
console.log(areParenthesesBalanced("((()))")); // true
