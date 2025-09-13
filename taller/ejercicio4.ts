/* Primera letra no repetida
Dado un string, encuentra la primera letra que no se repite. */

let str: string = "aadd";

function findFirstNonRepeatedChar(s: string): string | null {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // Compara la primera aparición (indexOf) con la última (lastIndexOf).
    // Si son iguales, la letra no se repite.
    if (s.indexOf(char!) === s.lastIndexOf(char!)) {
      return char!;
    }
  }
  return null; // Devuelve null si no se encuentra ninguna letra única.
}

let resultado = findFirstNonRepeatedChar(str);
console.log(resultado); // Imprime "b"