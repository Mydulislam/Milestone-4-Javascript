// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function namota(number){
    for(var i = 1; i <= 10; i++){
        console.log(number + ' X '+ i + " = " + number * i);
    }
}
namota(13);