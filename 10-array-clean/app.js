// Функция высшего порядка ============
const array = [1, 2, 3, 4, 5, -25, 40, -34, 0, 5, 3];

function arrayFilter(array, fn) {
  let newArr = [];
  for (const num of array) {
    if (fn(num) == true) {
      newArr.push(num);
    }
  }
  return newArr;
}
function removeNumber(num) {
  return num < 0 ? true : false;
}

console.log(arrayFilter(array, removeNumber));
