// Ciclo anidado para imprimir primero las letras de un objeto string que se repiten más veces en orden descendente y luego las letras que no se repiten en orden alfabético
// Solo con ciclos anidados y condicionales

let nombre: string = "Caaaaaaarlllloss"; // Define la cadena a analizar
let obj: Record<string, number> = {}; // Objeto para guardar la cantidad de repeticiones de cada letra

// Este for es para contar las repeticiones de cada letra
for (let i = 0; i < nombre.length; i++) { // Recorre cada letra del nombre
    let contador: number = 0; // Inicializa el contador de repeticiones
    for (let j = 0; j < nombre.length; j++) { // Recorre de nuevo cada letra para comparar
        if (nombre[i] === nombre[j]) { // Si las letras son iguales
            contador++; // Incrementa el contador
        }
    }
    if (!obj[nombre[i]]) { // Si la letra aún no está registrada en el objeto
        obj[nombre[i]] = contador; // Guarda la cantidad de repeticiones de la letra
    }
}
//este type es para definir la estructura del objeto que guarda las letras repetidas y su cantidad
type LetraRepetida = { letra: string; cantidad: number };

let repetidas: LetraRepetida[] = []; // Arreglo para letras que se repiten
let noRepetidas: string[] = []; // Arreglo para letras que no se repiten

for (let key in obj) { // Recorre cada letra registrada en el objeto
    if (obj[key] > 1) { // Si la letra se repite más de una vez
        repetidas.push({ letra: key, cantidad: obj[key] }); // Agrega la letra y su cantidad al arreglo de repetidas
    }

    if (obj[key] === 1) { // Si la letra solo aparece una vez
        noRepetidas.push(key); // Agrega la letra al arreglo de no repetidas
    }
}

repetidas.sort((a, b) => b.cantidad - a.cantidad); // Ordena las letras repetidas de mayor a menor cantidad
noRepetidas.sort(); // Ordena las letras no repetidas alfabéticamente

let resultado: string = ""; // Variable para guardar el resultado final

for (let i = 0; i < repetidas.length; i++) { // Recorre las letras repetidas
    for (let j = 0; j < repetidas[i].cantidad; j++) { // Repite tantas veces como se repite la letra
        resultado += repetidas[i].letra; // Agrega la letra al resultado
    }
}

for (let i = 0; i < noRepetidas.length; i++) { // Recorre las letras no repetidas
    resultado += noRepetidas[i]; // Agrega cada letra al resultado
}

console.log(resultado); 