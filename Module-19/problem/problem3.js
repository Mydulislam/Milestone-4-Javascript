/*==============================================================
    Write a function called make_avg() which will take an array of integers and
    the size of that array and return the average of those values.
====================================================================*/

function make_avg(){
    var intergerArray = [4,5,10,12,15];
    var arrLength = intergerArray.length;
    var sum = 0;
    for(var i = 0; i < arrLength; i++){
        sum = sum + intergerArray[i];
    }
    var avg = sum / arrLength;
    return avg;
}

var average = make_avg();
console.log(average);