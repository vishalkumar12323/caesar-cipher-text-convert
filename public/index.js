const latter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

class EncodeMessage {
  constructor() {}

  encode(message, shiftNumber) {
    let text = "";

    for (const char of message) {
      if (latter.includes(char)) {
        let position = latter.indexOf(char);
        let newPosition = position + shiftNumber;

        text += latter[newPosition];
      } else {
        text += char;
      }
    }
    return text;
  }
}

class DecodeMessage {
  constructor() {}

  decode(message, shiftNumber) {
    let text = "";

    for (const char of message) {
      if (latter.includes(char)) {
        let position = latter.indexOf(char);
        let newPosition = position - shiftNumber;

        if (newPosition < 0) {
          newPosition += latter.length;
        }

        text += latter[newPosition];
      } else {
        text += char;
      }
    }

    return text;
  }
}
