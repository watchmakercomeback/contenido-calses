 // función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.  
 //Verificar paréntesis balanceados
    const verificarParentesis = (expresion: string): boolean => {
        const stack: string[] = [];
        const parentesis: { [key: string]: string } = { '(': ')', '{': '}', '[': ']' };

        for (const char of expresion) {
            if (parentesis[char]) {
                stack.push(char);
            } else if (Object.values(parentesis).includes(char)) {
                const last = stack.pop();
                if (parentesis[last!] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };

    const expresion1 = "(a + b) * (c + d)";
    const expresion2 = "(a + b * (c + d)";
    console.log(verificarParentesis(expresion1)); // true
    console.log(verificarParentesis(expresion2)); // false  
    