// Функция высшего порядка ============
const array = [1, 2, 3, 4, 5, 25, 40, -34, 0, 5, 3];

function filter(num) {
  let removeNum = num;
  console.log(num);
  if (removeNum > 5) {
    array.splice(0, 1);
    return true;
  } else {
    return false;
  }
}

function arrayFiltering(array, fn, num) {
  let functionFilter = fn(num);
  let filteringArray = array;
  for (let i = 0; i < filteringArray.length; i++) {
    functionFilter;
  }
  return filteringArray;
}
console.log(arrayFiltering(array, filter, 6));
