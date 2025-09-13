/*Rotación de un arreglo
Dado un arreglo y un número `k`, rota el arreglo hacia la derecha `k` veces.*/

function girarArreglo(arreglo:number[], K:number):number[]{
    let giro = K % arreglo.length;
    for (let i=0; i<giro; i++){
        let ultimo = arreglo.pop();
        arreglo.unshift(ultimo!);
    }

    return arreglo;
}

console.log(girarArreglo([1,2,3,4,5,6], 2))