// Переводчик ============
let res = prompt("Выберите язык!");
switch (res) {
  case "de":
    console.log("Gutten tag!");
    break;
  case "ru":
    console.log("Добрый день!");
    break;
  case "en":
    console.log("Hello!");
    break;
  default:
    console.log("Мы не знаем такого языка!");
}
