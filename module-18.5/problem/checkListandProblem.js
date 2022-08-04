 /*==============================================================
    1 ) What is javascript?
 /*==============================================================*/
   /*  ans: Javascript is the programming language for the web. Javascript can change update and change
        both HTML and CSS. Javascript can calculate, manipulate and validate Data. 
        Javascript is a scripting and programming language that alows you to implement complex 
        features on the web pages. */
 /*==============================================================
    2 ) How does javascript work? জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
 /*==============================================================*/
    /* ans: A source code pass through a program called a compiler,which translate it into bytecode
    that the machine understand and can execute. it contrast javascript has no compilation step.
    an interpreter in the browser reads over the javascript code interprets each line, and runs it. */ 
 /*==============================================================
    3 ) What is variable? ভেরিয়েবল কি জিনিস?
 /*==============================================================*/
    /* ans: Variable means anything tha can vary. In javascript variable is store the data value 
    that can be changed later on. */  
 /*==============================================================
    4 ) How to declare variable? ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
 /*==============================================================*/
   /*  ans: Declare a javascript variable specify the type, leave at least one space,
    then the Name for the variable and end the line with a semicolon. Declare the variable with
    var,let,const keyword. */
 /*==============================================================
    5 ) How to change or update the value of a variable.? ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
 /*==============================================================*/
    /* ans:  This way, we have to repeat the variable Name when we assign them to something.
    var a = 10;
    a = 20;
    console.log(a)
    Now the 'a' variable value is 20. */
 /*==============================================================
    6 ) What are the types of variables? What are they? what are they কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি?
 /*==============================================================*/
  var ans = `The types of variable is primitive an non-primitive(object). The primitive types is 
        a) number(int,float) b) string c) boolean d) Null e) undefined f)symbole 
        and object data type is 
        a) array b) object c) function` 

 /*==============================================================
    7) জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। ?
 /*==============================================================*/
 var ans = `The types of variable is primitive an non-primitive(object). The primitive types is 
        a) number(int,float) b) string c) boolean d) Null e) undefined f)symbole 
        and object data type is 
        a) array b) object c) function`;
 /*==============================================================
    8 ) ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। 
    অর্থাৎ Variable এর naming convention সম্পর্কে বলো। ?
 /*==============================================================*/
 var ans = `1) Names can contain letters, digits, underscores, and dollar signs.
            2) Names must begin with a letter
            3) Names can also begin with $ and _ (but we will not use it in this tutorial)
            4) Names are case sensitive (y and Y are different variables)
            5) Reserved words (like JavaScript keywords) cannot be used as names
            6) Best practices is camelcase`
 /*==============================================================
    9 ) দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে ?
 /*==============================================================*/
   var ans = `(=) it is use for assign a variable such as var a = 10,
              (-) it is use for substraction two operands or variable such as
              (*) it is use for multiple operands or variable 
              (/) it is use for divisible operands,
              (%) it is use for remainder`
   var x = 30;
   var y = 20;
   var sub = x-y; // 10
   var mul = sub*3; // 30
   var div = mul/6; //  180
   var remain = div%7; // 5
 /*==============================================================
   10 ) শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
 /*==============================================================*/
   var ans = `(+=) The += assignment operator adds a value to a variable.
              (-=) The += assignment operator adds a value to a variable.
              (*=) The *= assignment operator multiplies a variable.
              (/=) The /= assignment divides a variable.
              (%=) The %= assignment operator assigns a remainder to a variable.`
   var x = 10;
      x += 5; // x = 15

   var y = 20;
      y -= 10; // y = 10;

   var z = 5;
      z *= 5; // z = 25;
   
   var p = 6;
      p /= 3; // p = 2
   
   var q = 8;
      q %= 3; // q = 2

/*==============================================================
   11) ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
 /*==============================================================*/

 var ans = `(++) The increment operator (++) increments (adds one to) 
            its operand and returns a value.
            (--) The decrement operator (++) decrement (subtract one to) 
            its operand and returns a value.`;
var increm = 3;
increm++ // increm = 4;

var dcrem = 5;
dcrem-- // dcrem = 4;

/**************Increment operator***************** */
 let x = 3;
 const y = x++;
 
 console.log(`x:${x}, y:${y}`);
 // expected output: "x:4, y:3"
 
 let xy = 3;
 const xyb = ++a;
 
 console.log(`a:${xy}, b:${xyb}`);
 // expected output: "xy:4, b:4"
 
/**************Decrement operator***************** */
 let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:2, b:2"

/*==============================================================
   12) parseInt, parseFloat, toFixed এইগুলা কি করে? 
 /*==============================================================*/
 var ans = `(parseInt) parses a string argument and returns an integer
            (parseFloat) parses an argument (converting it to a string first if needed) 
            and returns a floating point number
            (toFixed) toFixed() method formats a number using fixed-point notation and return
            string value`;

var parseString = '15'; // it is string 
var parseInteger = parseInt(parseString); //  15 and it is number;

var parseFloatString = '15.50'; // it is string 
var parseFloatNumber = parseFloat(parseFloatString); // 12.50 it is float number

var fixedFloatValue = 123.456; // it is number
var fixedValue = fixedFloatValue.toFixed(2) // '123.45' it is string 

/*==============================================================
   13) Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়? 
 /*==============================================================*/

 var ans = `Array: In JavaScript, array is a single variable that is used to store 
 different elements. It is often used when we want to store list of elements and access 
 them by a single variable.
 work:  array individually referenced by using an index to a unique identifier
 declare: Array variables are declared identically to variables of their data type, 
 except that the variable name is followed by one pair of square [ ] brackets for each
  dimension of the array
 `

var declarArray = [1,2,3,5];

/*==============================================================
   14) array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
/*==============================================================*/
 var arrayElements = [1,5,6,8];
 var arrayElement = arrayElements.length;

 /*==============================================================
   14)array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। 
   এবং মান কিভাবে চেইঞ্জ হয়।  
/*==============================================================*/
 var ans =  `Each element in the array (which is basically a list) is fixed in the index 
 based position. it's start position is 0. Use the index of the element to change the 
 corresponding array element.`;

 var arr = ['Rashed','Masud','Belal','Abdul-hakim'];

 arr[2] = 'Mydul'; // ['Rashed','Masud','Mydul','Abdul-hakim']

 /*==============================================================
   16) কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়  
/*==============================================================*/
 var ans = `The indexOf() method returns the first index at which a 
 given element can be found in the array, or -1 if it is not present.`;

 var arr1 = [5,9,7,8];
 var elementIndex = arr1.indexOf(8)  // 3
 var notGetElement = arr1.indexOf(9) // -1

 /*==============================================================
   17) কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো  
/*==============================================================*/

var myElemet = [7,8,9,10,15];
var myFixedElement = myElemet[3] // 10;

/*==============================================================
   18) কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে  
/*==============================================================*/
var ans = `Use the index of the element to change the 
corresponding array element.`;

var arrayChange = [4,5,6,9,15];
 arrayChange[2] = 18; // [4,5,18,9,15]

/*==============================================================
   19) একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন 
   সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?  
/*==============================================================*/

var ans = `The indexOf() method returns the first index at which a 
given element can be found in the array`;

var elementsCheck = [4,8,9,7,12];
var checkIndex = elementsCheck.indexOf(7); // index is 3

/*==============================================================
   20) ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে
    তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে?  
/*==============================================================*/
var ans = `when did not get array elements corresponding index it's return undefined`;

var serachElement = [8,9,71,15,18];
var undefinedElement = serachElement[5]; // return undefined;

/*==============================================================
   21) কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে
    কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে  
/*==============================================================*/

var ans = `using array push and pop method`;

var pushingElement = [4,3,2,1,5];
    pushingElement.push(10) // [4,3,2,1,5,10]
    pushingElement.push(19) // [4,3,2,1,5,10,19]
    pushingElement.pop() // [4,3,2,1,5,10] // 19 is removed 

/*==============================================================
   22) কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে 
   যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের 
   করে দিতে চাইলে কিভাবে বের করে দিবে  
/*==============================================================*/
var ans = `using array shift() and unshift() method`;

var shiftElement = [7,8,9,4];
   shiftElement.shift() // [8,9,4] // 7 is removed
   shiftElement.unshift(12) // [12,8,9,4] 12 is added 

/*==============================================================
   23) তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।  
/*==============================================================*/

var ans = `(>) greater than,
           (<) less than,
           (==) equal,
           (!=) not equal,
           (<=) less than or eual
           (>=) greater than or equal
           (===) equal value and type
           (!==) not equal value and type
           (&&) logical AND operator. both condition are true it is true
           (||) logical OR operator. one condition are ture it is true`

var compare1 = 45;
var compare2 = 30;
var compare3 = 45;
compare1 > compare2 // true

compare1 < compare2 // false 

compare1 == compare2 // false
compare1 == compare3 // true

compare1 != compare2 // true

compare1 <= compare2 // false
compare1 <= compare3 // true

compare2 >= compare3 // false

compare1 === compare3 // true;

compare1 !== compare3 // false

compare1 > compare2 && compare2 > compare3 // false

compare1 > compare2 || compare2 > compare3 // true
