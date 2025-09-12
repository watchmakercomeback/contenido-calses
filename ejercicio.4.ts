//Primera letra no repetida
//Dado un string, encuentra la primera letra que no se repite.
const primeraLetraNoRepetida = (str: string): string | null => {
    const contador: { [key: string]: number } = {};

    for (const char of str) {
        contador[char] = (contador[char] || 0) + 1;
    }

    for (const char of str) {
        if (contador[char] === 1) {
            return char;
        }
    }

    return null;
};

const cadena = "abacabad";
console.log(primeraLetraNoRepetida(cadena)); // Output: "c"