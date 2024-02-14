// Булева логика ============
const hasLicense = true;
const age = 27;
const isDrunk = true;

let res = age > 18 && hasLicense && !isDrunk ? "может" : "не может";
console.log(`Водитель ${res} сесть за руль`);
