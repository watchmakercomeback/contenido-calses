//function that turns a string like "automovilistico" into "iiiooottaclmsuv", without using functions or methods that do the job for you

let test = "automovilistico";

function sorter(arr) {
    let sortArr = [];
    let sortGroup = [];
    let arrOutput = "";
    let amount = {};
    let len = arr.length;
    let highest = 0;

    for (let i = 0; i < len; i++) {
        sortArr.push(arr[i]);
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (sortArr[j] > sortArr[j + 1]) {
                [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
            }
        }
    }


    for (let i = 0; i < len; i++) {
        if (amount[sortArr[i]]) {
            amount[sortArr[i]].quantity += 1;
        }else {
            amount[sortArr[i]] = {quantity: 1};
        }
    }

    for (let key in amount) {
        if (amount[key].quantity > highest) {
            highest = amount[key].quantity;
        }
    }

    for (let i = highest; i > 0; i--) {
        for (let key in amount) {
            if (amount[key].quantity === i) {
                for (let j = 0; j < amount[key].quantity; j++) {
                    sortGroup.push(key);
                }
            }
        }
    }

    for (let i = 0; i < sortGroup.length; i++) {
        arrOutput += sortGroup[i];
    }

    console.log(arrOutput);
    return arrOutput;

}

sorter(test);