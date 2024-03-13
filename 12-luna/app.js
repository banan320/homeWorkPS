// Работа со строками ============
const cardNumber = "4561-2612-1234-5467";

function checkCardNumber(num) {
  const numString = String(num).replace(/-/g, "");
  let sum = 0;
  const parity = numString.length % 2;
  for (let i = 0; i < numString.length; i++) {
    let digit = Number(numString[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return Number(sum % 10) === 0;
}
console.log(checkCardNumber(cardNumber));
