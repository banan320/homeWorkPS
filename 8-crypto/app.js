// Шифратор/дешифратор паролей ============
const pass = "password";

function crypto(pass) {
  const slicePass = pass.split("").slice(0, 4).reverse().join("");
  return slicePass + pass.slice(4);
}

const cryptoPass = crypto(pass);

function check(pass) {
  const checkPass = pass.slice(4);

  const checkCrypto = cryptoPass.split("").slice(0, 4).reverse().join("");
  const fullPass = checkCrypto + checkPass;

  if (fullPass === pass) {
    return true;
  }
  return false;
}

console.log(check(pass));
