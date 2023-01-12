"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dollarRate = 3.43, euroRate = 3.69, shekelRate = 1, pesoRate = 0.019, poundRate = 4.18, yenRate = 0.026;
const getRate = (coinType) => {
    switch (coinType) {
        case "dollar":
            return dollarRate;
        case "euro":
            return euroRate;
        case "shekel":
            return shekelRate;
        case "peso":
            return pesoRate;
        case "pound":
            return poundRate;
        case "yen":
            return yenRate;
        default:
            return 0;
    }
};
const getAmountAfterConvert = (coinTypeUse, coinToConvertTo, moneyCount) => {
    const coinTypeUseRate = getRate(coinTypeUse);
    const coinToConvertToRate = getRate(coinToConvertTo);
    const moneyToRetrieve = moneyCount * (coinToConvertToRate / coinTypeUseRate);
    return moneyToRetrieve;
};
const coin = String(prompt("enter coin type you use", "dollar"));
const rateToRetrieve = getRate(coin);
const coinToConvertTo = String(prompt("enter coin type you convert to", "dollar"));
