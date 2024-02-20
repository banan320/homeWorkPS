// Циклы, сортировка ============
const arrayNumbers = [1, 40, -5, 10, 0];

function sortArr(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tempNumber = array[i];
        array[i] = array[j];
        array[j] = tempNumber;
      }
    }
  }
  return array;
}
console.log(sortArr(arrayNumbers));
