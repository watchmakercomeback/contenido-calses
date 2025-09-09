const palabra: string = 'jose';
const letras: string[] = [...palabra];

if (Array.isArray(letras) && letras.every(elem => typeof elem === 'string')) {
    for (let i = 0; i < letras.length - 1; i++) {
        for (let j = 0; j < letras.length - 1 - i; j++) {
            if (letras[j]! > letras[j + 1]!) {
                const temp = letras[j]!;
                letras[j] = letras[j + 1]!;
                letras[j + 1] = temp;
            }
        }
    }

    console.log('Letras ordenadas alfabéticamente:');
    for (let i = 0; i < letras.length; i++) {
        console.log(letras[i]);
    }

    console.log(`La palabra es: ${palabra}`);
} else {
    console.error('Error: "letras" no es un arreglo de strings válido');
}
