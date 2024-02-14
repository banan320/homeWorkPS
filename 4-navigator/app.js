// Навигатор ============
const addressLat = 100;
const addressLong = 500;
const positionLat = 10;
const positionLong = 500;

let res =
  ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5;
console.log(res);
