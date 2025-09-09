function orderFrequency(text) {
    const frequency = {};
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (frequency[c] === undefined) {
            frequency[c] = 1;
        } else {
            frequency[c]++;
        }
    }
    const dup = [];
    const uni = [];
    for (const c in frequency) {
        const item = { char: c, count: frequency[c]};
        if (item.count > 1){
            dup[dup.length] = item;
        } else {
            uni[uni.length] = item;
        }
    }
    function sort(arr){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j].count < arr[j + 1].count) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    sort(dup);
    sort(uni);

    let result = '';
    for (let i = 0; i < dup.length; i++) {
        const char = dup[i].char;
        const count = dup[i].count;  
        for (let j = 0; j < count; j++) {
            result += char;
        }
    }
    for(let i = 0; i<uni.length; i++){
        result += uni[i].char;
    }
    return result;
}

console.log(orderFrequency("hellooaaa"));  
