// Document Object Model ============
const input__operand_1 = document.querySelector(".input__operand_1");
const input__operand_2 = document.querySelector(".input__operand_2");
const addition = document.querySelector(".addition");
const division = document.querySelector(".division");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const total = document.querySelector(".total");

function reset() {
  input__operand_1.value = "";
  input__operand_2.value = "";
}

function getAddition() {
  let summ = +input__operand_1.value + +input__operand_2.value;
  total.innerHTML = summ;
  reset();
}

function getDivision() {
  let summ = +input__operand_1.value / +input__operand_2.value;
  total.innerHTML = summ;
  reset();
}

function getSubtraction() {
  let summ = +input__operand_1.value - +input__operand_2.value;
  total.innerHTML = summ;
  reset();
}

function getMultiplication() {
  let summ = +input__operand_1.value * +input__operand_2.value;
  total.innerHTML = summ;
  reset();
}

addition.addEventListener("click", getAddition);
division.addEventListener("click", getDivision);
subtraction.addEventListener("click", getSubtraction);
multiplication.addEventListener("click", getMultiplication);
