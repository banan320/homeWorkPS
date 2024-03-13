// Объекты ============
const query = {
  search: "Вася",
  take: 10,
};
function getQuery(option) {
  let temp = Object.keys(option)
    .map((el) => `${el}=${option[el]}`)
    .join("&");
  return temp;
}
console.log(getQuery(query));
