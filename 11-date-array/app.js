// Итерации в массивах ============
let arr = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "12/31/2023",
  "00/13/2022",
  "24/00/2022",
  "41/12/2023",
  "34+22+2023",
];

function stringToDate(arr) {
  return arr
    .map((el) => el.split(/[\W]/g))
    .filter((num) =>
      num[0] == ""
        ? false
        : num[0] <= 31 && num[1] <= 31 && num[0] != 0 && num[1] != 0
    )
    .map((el) => el.join("-"));
}
console.log(stringToDate(arr));
