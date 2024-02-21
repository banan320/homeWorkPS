// Конвертация валют ============
function currencyConversion(summ, currency = "rub", targetCurrency = "usd") {
  let rubToUsd = 0.011;
  let rubToEur = 0.01;
  let rubToCny = 0.077;
  let dollarToRub = 90;
  let eurToRub = 97;
  let cnyToRub = 12;

  switch (true) {
    case targetCurrency === "usd" && currency === "rub":
      return summ * rubToUsd;
    case targetCurrency === "eur" && currency === "rub":
      return summ * rubToEur;
    case targetCurrency === "cny" && currency === "rub":
      return summ * rubToCny;
    case targetCurrency === "rub" && currency === "usd":
      return summ * dollarToRub;
    case targetCurrency === "rub" && currency === "eur":
      return summ * eurToRub;
    case targetCurrency === "rub" && currency === "cny":
      return summ * cnyToRub;
    default:
      return null;
  }
}
console.log(currencyConversion(10, "usd", "rub"));
