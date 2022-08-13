function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}

let myInch = feetToInch(5.6);
let inchWithTwoDecimal = myInch.toFixed(2);
console.log(parseFloat(inchWithTwoDecimal));