
function getAverage(array : number[]): void{
    let avg : number =0, countNumbers=0;;
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