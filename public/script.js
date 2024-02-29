const cipherText = document.getElementById("text");
const normalText = document.getElementById("textarea");
const options = document.getElementById("encode");
const shiftNumber = document.getElementById("shift-amount");
const btn = document.getElementById("btn");

const textEncoder = new EncodeMessage();
const textDecoder = new DecodeMessage();

btn.addEventListener("click", () => {
  let text = normalText.value.toLowerCase();
  let shiftAmount = Number(shiftNumber.value);

  let direction = options.value;

  if (direction === "encode") {
    const encodedText = textEncoder.encode(text, shiftAmount);
    cipherText.innerText = encodedText;
  } else {
    const decodedText = textDecoder.decode(text, shiftAmount);
    cipherText.innerText = decodedText;
  }
});
