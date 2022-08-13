function minNumber(number1, number2, number3){
    if(number1 < number2 && number1 < number3){
        return number1;
    }
    else if(number2 < number1 && number2 < number3){
        return number2;
    }
    else{
        return number3;
    }
}

var minNumberIs = minNumber(25,15,30);

console.log('The Minimum number is : ', minNumberIs);


// using building method 
function buildInMethodeMinNumber(num1, num2, num3){
    var myMinNumber = Math.min(num1, num2, num3);
    return myMinNumber;
}
var setNumberIs = buildInMethodeMinNumber(74,7,6);
console.log('The Minimum : ', setNumberIs);
