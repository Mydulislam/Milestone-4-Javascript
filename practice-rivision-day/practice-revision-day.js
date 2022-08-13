/* 
১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। 
একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। 
সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো
*/
let stringVariable = 'Bangladesh our country';
let numberVariable = 12502121252;
let booleanVariable = true;


/*  */

let letVariable = 145;

const pi = 3.1416;

// pi = 455; has an error

letVariable = 784;
console.log(letVariable);

/*  */

let number1 = 1; 
let number2 = 2;

let add  = number1 + number2; // expected output 3

let subtract = number1 - number1; // expected output -1

let multiple = number1 * number2; // expected output 2

let division = number2 / number1; // expected output 2

let remainder = number2 / number1 ; // expected output 0


add += number1;
subtract -= number2;
multiple *= number1;
division /= number2;
remainder %= number1;

/*  */

let comparison1 = 15;
let  comparison2 = 10;

comparison1 > comparison2 // expected output ture

comparison1 < comparison2 // expected output false

comparison1 === comparison2 // expected ouptut false

comparison2 !== comparison1 // expected output true

comparison1 >= comparison2 // expected output true

comparison1 <= comparison2 // expected output false

/*  */

let conditionValue1 = 15;
let conditionValue2 = 25;

if(conditionValue1 >= 10 && conditionValue2 <= 30){
    console.log('It is true')
}
if(conditionValue1 >= 10 || conditionValue2 < 20){
    console.log('It is also true')
}

/*  */
if(conditionValue1 > comparison2){
    console.log(conditionValue1, 'is greater than ', conditionValue2);
}
else{
    console.log(conditionValue1, 'is less than ',conditionValue2);
}

/* 
    ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা 
    আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
*/

let i = 7;
while(i <= 19){
    if(i % 2 === 1){
        console.log(i);
    }
    i++;
}
/* 
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে
 কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ 
 পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে।
  এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/

let array1 = [4,5,9,88,54,26,48];

let array1Length = array1.length;

array1[4] = 55;

array1.splice((array1.length),0,55,56)  // [4,5,9,88,54,26,48 55, 56]

array1.splice(5, 0, 100, 200, 300); // [4, 5, 9, 88, 54, 100, 200, 300, 26, 48, 55, 56]


/* 
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে।
 সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
*/
let array2 = [4,5,9,88,54,26,48];

for(let i = 0; i <= array2.length; i++){
    console.log(array2[i])
}

for(const element of array2){
    console.log(element);
}

/* 
    ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা 
    থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/

let array3 = [50, 60, 80, 75, 45, 96, 42, 88, 98];

for(let i = 0; i < array3.length; i++){
	if( array3[i] > 80 ) {
    	console.log(array3[i])
    }
}

/* 
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। 
তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
*/

function multipleFunction(num1, num2, num3){
    let multiple = num1 * num2 * num3;
    return multiple;
}

let result = multipleFunction(5,6,3);
console.log(result);  // 90


/* 
১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। 
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
*/

let myObj = {
    firstName : 'Mydul',
    lastName : 'Islam',
    age : 21
}

myObj.age = 26;
console.log(myObj);