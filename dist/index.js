"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
try {
    const fileData = fs_1.default.readFileSync(path_1.default.resolve("rates.txt"), "utf8");
    console.log(fileData);
}
catch (err) {
    console.log(err);
}
// const getAverage =(array : number[]) : void =>{
//     let avg : number =0, countNumbers=0;
//     array.forEach(function(value){
//         avg=avg+value;
//         countNumbers++;
//     })
//     alert(avg/countNumbers);
// }
// let number : number = Number(prompt("enter number, if you want to stop, enter -1"));
// let array : number[] = new Array;
// while(number!=-1){
//     array.push(number);
//     number=Number(prompt("enter number, if you want to stop, enter -1"));
// }
// getAverage(array);
// const getAmountOfPositive = (array : number[]): void =>{
//     let countPositiveNumbers:number=0;;
//     array.forEach(function(value){
//         if(value>0){
//             countPositiveNumbers++;
//         }
//     })
//     alert(countPositiveNumbers);
// }
// number = Number(prompt("enter number, if you want to stop, enter 0"));
// array = new Array;
// while(number!=0){
//     array.push(number);
//     number=Number(prompt("enter number, if you want to stop, enter 0"));
// }
// getAmountOfPositive(array);
// number = Number(prompt("enter number, if you want to stop, enter 0"));
// array = new Array;
// while(number!=0){
//     array.push(number);
//     number=Number(prompt("enter number, if you want to stop, enter 0"));
// }
// alert(array.sort)
