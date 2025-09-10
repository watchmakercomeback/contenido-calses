function transformFunction(myString) {
    let freq = {};
    let letters = [];


    for (let i = 0; i < myString.length; i++) {
        let ch = myString[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch] += 1;
        }
    }


    for (let ch in freq) {
        let count = freq[ch];
        for (let i = 0; i < count; i++) {

            letters[letters.length] = ch;
        }
    }


    for (let i = 0; i < letters.length - 1; i++) {
        for (let j = i + 1; j < letters.length; j++) {
            let a = letters[i];
            let b = letters[j];
            let freqA = freq[a];
            let freqB = freq[b];


            if (freqA < freqB || (freqA === freqB && a > b)) {

                letters[i] = b;
                letters[j] = a;
            }
        }
    }


    let transformedString = "";
    for (let i = 0; i < letters.length; i++) {
        transformedString += letters[i];
    }

    return transformedString;
}

console.log(transformFunction("suddendissaster"));

