
function getAverage(array : number[]): void{
    let avg : number =0, countNumbers=0;
    array.forEach(function(value){
        avg=avg+value;
        countNumbers++;
    })
    alert(avg/countNumbers);
}
let number : number = Number(prompt("enter number, if you want to stop, enter -1"));
let array : number[] = new Array;
while(number!=-1){
    array.push(number);
    number=Number(prompt("enter number, if you want to stop, enter -1"));
}
getAverage(array);

function getAmountOfPositive(array : number[]): void{
    let countPositiveNumbers:number=0;;
    array.forEach(function(value){
        if(value>0){
            countPositiveNumbers++;
        }
    })
    alert(countPositiveNumbers);
}

number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while(number!=0){
    array.push(number);
    number=Number(prompt("enter number, if you want to stop, enter 0"));
}
getAmountOfPositive(array);

function findLowest(array : number[]) : number{
    let lowestNumber:number=array[0], lowestNumberIndex:number=0, i=0;
    array.forEach(function(value){
        if(value<lowestNumber){
            lowestNumber=value;
            lowestNumberIndex=i;
        }
        i++
    })
    return lowestNumberIndex;
}

function sortList(array : number[]): void{
    let sortedArray : number[] =new Array;
    while(array.length!=0){
        let lowestNumberIndex=findLowest(array);
        sortedArray.push(array[lowestNumberIndex]);
        delete array[lowestNumberIndex];
    }
    array.forEach(function(value){
        alert(value)
    })
}


number = Number(prompt("enter number, if you want to stop, enter 0"));
array = new Array;
while(number!=0){
    array.push(number);
    number=Number(prompt("enter number, if you want to stop, enter 0"));
}
sortList(array);

    
