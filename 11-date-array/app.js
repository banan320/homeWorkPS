// Итерации в массивах ============
let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
function stringToDate(arr) {
  return arr
    .map((el) => el.split("/").join("-"))
    .filter((el) => el[0] <= 3 && el[4] <= 2);
}
console.log(stringToDate(arr));
