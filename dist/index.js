"use strict";
function getAverage(array) {
    let avg = 0, countNumbers = 0;
    array.forEach(function (value) {
        avg = avg + value;
        countNumbers++;
    });
    alert(avg / countNumbers);
}
let number = Number(prompt("enter number, if you want to stop, enter -1"));
let array = new Array;
while (number != -1) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter -1"));
}
getAverage(array);
function getAmountOfPositive(array) {
    let countPositiveNumbers = 0;
    ;
    array.forEach(function (value) {
        if (value > 0) {
            countPositiveNumbers++;
        }
    });
    alert(countPositiveNumbers);
}
number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while (number != 0) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter 0"));
}
getAmountOfPositive(array);
function findLowest(array) {
    let lowestNumber = array[0], lowestNumberIndex = 0, i = 0;
    array.forEach(function (value) {
        if (value < lowestNumber) {
            lowestNumber = value;
            lowestNumberIndex = i;
        }
        i++;
    });
    return lowestNumberIndex;
}
function sortList(array) {
    let sortedArray = new Array;
    while (array.length != 0) {
        let lowestNumberIndex = findLowest(array);
        sortedArray.push(array[lowestNumberIndex]);
        delete array[lowestNumberIndex];
    }
    array.forEach(function (value) {
        alert(value);
    });
}
number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while (number != 0) {
    array.push(number);
    number = Number(prompt("enter number, if you want to stop, enter 0"));
}
sortList(array);
