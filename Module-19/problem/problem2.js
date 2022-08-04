/*==============================================================
    Write a function called make_avg() which will take an three integers and return the
    average of those values.
====================================================================*/
function make_avg(){
    var firstInteger = 10;
    var secondInteger = 24;
    var thirdInteger = 11;
    var sum = firstInteger + secondInteger + thirdInteger;
    var average = sum / 3;
    return average;
}
var avg = make_avg();
console.log(avg);