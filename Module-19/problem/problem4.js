/*==============================================================
    Write a function called odd_even() which takes an integer value and tells whether this
    value is even or odd. You need to do it in 4 ways:
====================================================================*/

function odd_even(number){
    if(number % 2 === 0){
        console.log(number, 'is even number')
    }
    else{
        console.log(number, 'is odd number ')
    }
}
odd_even(6);