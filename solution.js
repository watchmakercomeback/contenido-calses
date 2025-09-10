function transformFunction(myString) {
    let freq = {};
    for (let i = 0; i < myString.length; i++) {
        let ch = myString[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch] = freq[ch] + 1;
        }
    }
    let letters = [];
    for (let key in freq) {
        letters[letters.length] = { char: key, count: freq[key] };
    }
    for (let i = 0; i < letters.length - 1; i++) {
        for (let j = 0; j < letters.length - i - 1; j++) {
            let a = letters[j];
            let b = letters[j + 1];

            if (a.count < b.count ||
               (a.count === b.count && a.char > b.char)) {
                let temp = letters[j];
                letters[j] = letters[j + 1];
                letters[j + 1] = temp;
            }
        }
    }
    let result = "";
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].count; j++) {
            result += letters[i].char;
        }
    }
    return result;
}
console.log(transformFunction("suddendissaster"));//