let palabra = "abracadabra"
let wordNorm = palabra.toLocaleLowerCase();
let contador = {};

for (let i = 0; i < wordNorm.length; i++){
    let letra = wordNorm[i];

    if (contador[letra] !== undefined){
        contador[letra] = contador[letra] + 1;
    }
    else {
        contador[letra] = 1;
    }
}

let pares = [];

// the dictionary is passed in pairs to be able to order
for (let key in contador){
    if (Object.prototype.hasOwnProperty.call(contador, key)){
        pares.push([key, contador[key]]);
    }
}

let n = pares.length;

for (let i = 0; i < n; i++){
    let maximoId = i;

    //go through the value within the position
    for (let j = i +1; j < n; j++){
        let [letraMax, cantMax] = pares[maximoId];
        let [letraJ, cantJ] = pares[j];

        if (cantJ > cantMax){
            maximoId = j;
        }

        else if (cantJ === cantMax && letraJ < letraMax){
            maximoId = j;
        }
    }

    if (maximoId !== i){
        let temp = pares[i]; //I save the initial value of I in case of using it later
        pares[i] = pares[maximoId];
        pares[maximoId] = temp // I return to the auxiliary variable to have a checkpoint
       
     }  
}

console.log(pares)