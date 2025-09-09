function letterReorder(string) {
    let countLetters = {};
    for (let index = 0; index < string.length; index++) {
        countLetters[string[index]] = (countLetters[string[index]] || 0) + 1;
    }

    let keys = [];
    let values = [];

    for (let key in countLetters) {

        keys.push(key)
        values.push(countLetters[key])
    }
    // console.log(keys);

    for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values.length - 1 - i; j++) {
            if (values[j] < values[j + 1] || (values[j] === values[j + 1] && keys[j] > keys[j + 1])) 
                {
                let temporalValue = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temporalValue;
                let temporalKey = keys[j];
                keys[j] = keys[j + 1];
                keys[j + 1] = temporalKey;
            }
        }
    }

    let organizeString = {};

    for (let i = 0; i < keys.length; i++) {
        organizeString[keys[i]] = values[i];
    }

    let finalString = ""

    for (let i = 0; i < keys.length; i++) {
        let letter = keys[i]
        finalString += letter.repeat(values[i])
    }

    // console.log(organizeString);
    console.log(finalString);

}

letterReorder("kljjasdhhihoasdfh");