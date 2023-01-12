

import * as fs from 'fs'
 const dollarRate : number = 3.43,
 euroRate : number = 3.69,
 shekelRate : number = 1,
 pesoRate : number = 0.019,
 poundRate : number = 4.18,
 yenRate : number = 0.026;
 const getRate =(coinType : string) : number => {
    switch(coinType){
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
 }

 const getAmountAfterConvert =(coinTypeUse : string, 
    coinToConvertTo : string, moneyCount : number) : number => {
        const coinTypeUseRate=getRate(coinTypeUse);
        const coinToConvertToRate=getRate(coinToConvertTo);
        const moneyToRetrieve= moneyCount * (coinToConvertToRate/coinTypeUseRate)
        return moneyToRetrieve;

 }


 const coin : string = String(prompt("enter coin type you use", "dollar"));
 const rateToRetrieve : number = getRate(coin);
 const coinToConvertTo : string = String(prompt("enter coin type you convert to", "dollar"));

