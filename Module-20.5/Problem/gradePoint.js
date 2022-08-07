/* ==========================================================
কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+
 পাবে নাকি অন্য কোন গ্রেড পাবে। 
=============================================================*/

function gradePoint(marks){
    if(marks >= 80 && marks <= 100){
        return 'A+'
    }
    else if(marks >= 70 && marks < 80){
        return 'A'
    }
    else if(marks >= 60 && marks < 70){
        return 'A-'
    }
    else if(marks >= 50 && marks < 70){
        return 'B'
    }
    else if(marks >= 40 && marks < 60){
        return 'C'
    }
    else if(marks >= 33 && marks < 40){
        return 'D'
    }
    else if(marks >= 1 && marks < 33){
        return 'F'
    }
    else{
        return 'Must Number between 100';
    }
}

let myGrade = gradePoint(69);
console.log('My Grade is : ', myGrade);

 myGrade = gradePoint(100);
console.log('My Grade is : ', myGrade);

myGrade = gradePoint(33);
console.log('My Grade is : ', myGrade);

myGrade = gradePoint(23);
console.log('My Grade is : ', myGrade);

myGrade = gradePoint(123);
console.log('My Grade is : ', myGrade);