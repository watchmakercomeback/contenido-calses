
// function lettersSepartator(string) {

//     let lettersCount = {}
//     for (let index = 0; index < string.length; index++) {

//         lettersCount[string[index]] ? lettersCount[string[index]] += 1 : lettersCount[string[index]] = 1
//     }
//     let keys = [];
//     let values = [];


//     // aqui hay que corregir este para organizarlo alfabeticamentte o mezclarlo con  el otro


//     for (let key in lettersCount) {
//         if (keys[0] < key) {
//             keys.push(key)
//             values.push(lettersCount[key])
//         } else {
//             keys.unshift(key)
//             values.unshift(lettersCount[key])
//         }

//     }
//     console.log(keys);


//     for (let i = 0; i < values.length - 1; i++) {
//         for (let j = 0; j < values.length - 1 - i; j++) {
//             if (values[j] < values[j + 1]) {
//                 let tempValue = values[j];
//                 values[j] = values[j + 1];
//                 values[j + 1] = tempValue;
//                 let tempKey = keys[j];
//                 keys[j] = keys[j + 1];
//                 keys[j + 1] = tempKey;
//             }
//         }
//     }

//     let sortedObject = {};
//     for (let i = 0; i < keys.length; i++) {
//         sortedObject[keys[i]] = values[i];
//     }


//     let finalString = "" 

//     for (let i = 0; i < keys.length; i++) {
//        let letter = keys[i]

//        finalString += letter.repeat(values[i])

//     }


//     console.log(sortedObject);
//     console.log(finalString);



// }



// lettersSepartator("kljjasdhhihoasdfh") 

function lettersSeparator(string) {
    let lettersCount = {};
    for (let index = 0; index < string.length; index++) {
        lettersCount[string[index]] = (lettersCount[string[index]] || 0) + 1;
        // con ifternario tambien fiunciona cual es mejor?
        // lettersCount[string[index]] ? lettersCount[string[index]] += 1 : lettersCount[string[index]] = 1
    }

    let keys = [];
    let values = [];

    for (let key in lettersCount) {

        keys.push(key)
        values.push(lettersCount[key])
    }
    console.log(keys);

    for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values.length - 1 - i; j++) {
            if (values[j] < values[j + 1] || (values[j] === values[j + 1] && keys[j] > keys[j + 1])) {
                let tempValue = values[j];
                values[j] = values[j + 1];
                values[j + 1] = tempValue;
                let tempKey = keys[j];
                keys[j] = keys[j + 1];
                keys[j + 1] = tempKey;
            }
        }
    }

    let sortedObject = {};

    for (let i = 0; i < keys.length; i++) {
        sortedObject[keys[i]] = values[i];
    }

    let finalString = ""

    for (let i = 0; i < keys.length; i++) {
        let letter = keys[i]
        finalString += letter.repeat(values[i])
    }

    console.log(sortedObject);
    console.log(finalString);

}

lettersSeparator("kljjasdhhihoasdfh");