/* =================================================================
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ 
কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
====================================================================*/
function ceilciousToFahrenheit(ceilcius){
    var convertFahrenheit = ceilcius * (9/5) + 32;
    return convertFahrenheit; 
}

var fahrenheitTemperature = ceilciousToFahrenheit(1);
console.log('The Fahrenheit Temperature is : ', fahrenheitTemperature);

var fahrenheitTemperature = ceilciousToFahrenheit(5);
console.log('The Fahrenheit Temperature is : ', fahrenheitTemperature);