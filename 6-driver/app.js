// Булева логика ============
const hasLicense = true;
const age = 27;
const isDrunk = true;

let canDrive = age > 18 && hasLicense && !isDrunk ? "может" : "не может";
console.log(`Водитель ${canDrive} сесть за руль`);
