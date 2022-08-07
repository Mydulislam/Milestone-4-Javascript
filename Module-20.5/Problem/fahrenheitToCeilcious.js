/* =======================================================
একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে 
সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
===========================================================*/
function fahrenheitToCelcious(fahrenheit){
    var convertCelcious = (fahrenheit - 32) * 5/9;
    return convertCelcious;
}

const convertCelcious = fahrenheitToCelcious(1);
var temperature = convertCelcious.toFixed(2);
    temperature = parseFloat(temperature);
console.log('The Fahrenheit Temperature is : ' + temperature);