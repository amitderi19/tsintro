"use strict";
const getAverage = (array) => {
    let avg = 0, countNumbers = 0;
    array.forEach(function (value) {
        avg = avg + value;
        countNumbers++;
    });
    alert(avg / countNumbers);
};
let number = Number(prompt("enter number, if you want to stop, enter -1"));
let array = new Array;
while (number != -1) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter -1"));
}
getAverage(array);
const getAmountOfPositive = (array) => {
    let countPositiveNumbers = 0;
    ;
    array.forEach(function (value) {
        if (value > 0) {
            countPositiveNumbers++;
        }
    });
    alert(countPositiveNumbers);
};
number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while (number != 0) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter 0"));
}
getAmountOfPositive(array);
number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while (number != 0) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter 0"));
}
alert(array.sort);
