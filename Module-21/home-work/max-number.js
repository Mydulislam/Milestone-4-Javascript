function maxNumber(number1, number2, number3){
    if(number1 > number2 && number1 > number3){
        return number1;
    }
    else if(number2 > number1 && number2 > number3){
        return number2;
    }
    else{
        return number3;
    }
}

var maxNumberIs = maxNumber(12,51,20);

console.log('The max number is : ', maxNumberIs);


// build in methode diye

function buildInMethodeMaxNumber(num1, num2, num3){
    var myMaxNumber = Math.max(num1, num2, num3);
    return myMaxNumber;
}
var setNumberIs = buildInMethodeMaxNumber(74,7,88);
console.log('The maximum : ', setNumberIs);