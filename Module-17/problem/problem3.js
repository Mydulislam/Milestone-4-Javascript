// First Problem Solve
var firstNumber = 113;
var secondNumber = 79;
var thirdNumber = 80;

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber + ' and First Number is the Largest Number');
}
else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber + ' and Second Number is the Largest Number');
}
else{
    console.log(thirdNumber + ' and Thired Number is the Largest Number')
}

// Second Problem Solve

var firstSide = 6;
var secondSide = 5;
var thirdSide = 5;
if(firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide){
    console.log('Triangle is Equilateral')
}
else if(firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
    console.log('Triangle is Isosceles ')
}
else{
    console.log('Triangle is scalene');
}
