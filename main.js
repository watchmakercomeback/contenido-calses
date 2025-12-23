function transformString(str) {
  let transformedString = "";
  let letters = [];
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char] === undefined) {
      seen[char] = 1;
    } else {
      seen[char]++;
    }
  }

  for (let char in seen) {
    let obj = {
      char: char,
      count: seen[char],
    };
    letters.push(obj);
  }

  for (let i = 0; i < letters.length - 1; i++) {
    for (let j = 0; j < letters.length - i - 1; j++) {
      let current = letters[j];
      let next = letters[j + 1];

      if (current.count < next.count) {
        let temp = letters[j];
        letters[j] = letters[j + 1];
        letters[j + 1] = temp;
      }
      else if (current.count === next.count) {
        if (current.char > next.char) {
          let temp = letters[j];
          letters[j] = letters[j + 1];
          letters[j + 1] = temp;
        }
      }
    }
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].count; j++) {
      transformedString += letters[i].char;
    }
  }

  return transformedString;
}

const myString = "carrodecarreras";
const transformed = transformString(myString);
console.log(transformed); 