const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let decodedMorseTable = {};
  // let exprArr = expr.split('');
  let result = "";

  for (let key in MORSE_TABLE) {
    let arr = key.split("");
    let decodedKey = "";

    for (let elem of arr) {
      if (elem === "-") {
        decodedKey += "11";
      }
      if (elem === ".") {
        decodedKey += "10";
      }
    }
    for (let i = 0; decodedKey.length < 10; i++) {
      decodedKey = 0 + decodedKey;
    }
    decodedMorseTable[decodedKey] = MORSE_TABLE[key];
  }
  decodedMorseTable["**********"] = " ";
  console.log(decodedMorseTable);

  let currentStr = "";
  let array = [];
  for (let i = 0; i < expr.length; i++) {
    currentStr += expr[i];
    if (currentStr.length == 10) {
      array.push(currentStr);
      currentStr = "";
    }
  }

  for (let elem of array) {
    for (let key in decodedMorseTable) {
      if (elem === key) {
        result += decodedMorseTable[key];
      }
    }
  }

  return result;
}

module.exports = {
  decode,
};
