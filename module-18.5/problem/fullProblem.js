/*==============================================================
   24) তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, 
   ৬০ হাজার টাকার বেশি হলে gaming ল্যাপটপ কিনবে, 
   ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে ,
    ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। 
    না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
/*==============================================================*/

var myMoney = 90000;

if(myMoney >= 80000){
    console.log('I am buying a MAC')
}
else if(myMoney >= 60000){
    console.log('I am buying a gaming laptop')
}
else if(myMoney >= 40000){
    console.log('I am buying a lenovo yoga');
}
else if(myMoney >= 20000){
    console.log('I am buying a used laptop')
}
else{
    console.log('I do the work using by mobile phone')
}

/*==============================================================
   25) আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
/*==============================================================*/

for(var i = 1; i < 40; i++){
    console.log('আসকে আমার মন ভালো নেই');
}
/*==============================================================
   26) while লুপ কিভাবে কাজ করে
/*==============================================================*/
var ans = `A while loop is a loop that continues to run and execute 
a while statement as long as a predetermined condition holds true. 
After each iteration, the loop checks that the condition remains true. 
If the condition is now false, the loop terminates.`;

var whileLoop = 1;
while(whileLoop <= 10){
    console.log(whileLoop + '. I am while loop and running 10 times');
    whileLoop++
}
/*==============================================================
   27) for লুপ কিভাবে কাজ করে
/*==============================================================*/
var forLoop = `"For" Loop is used to repeat a specific block of code a known number of times`;

for(var forLoop = 1; forLoop <= 10; forLoop++){
    console.log(forLoop + '. I am for loop and running 10 times')
}

/*==============================================================
   28) while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
/*==============================================================*/
var noChangeOfLoopVariable = `If a condition for a while loop does not changes loo variable it 
will run infinitely unless the condition is None or Null`;

var loopVariable = 1;
while(loopVariable < 10){
    console.log(' I am running infinity times');
    // loopVariable++
}

/*==============================================================
   29) একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
/*==============================================================*/

for(var start = 58; start <= 98; start++){
    console.log(start);
}

/*==============================================================
   30) একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 
/*==============================================================*/

for(var evenNum = 412; evenNum <= 456; evenNum+=2){
    console.log(evenNum)
}

/*==============================================================
   31) একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
/*==============================================================*/

for(var oddNum = 581; oddNum <= 623; oddNum += 2){
    console.log(oddNum);
}

/*==============================================================
   32) while আর for loop এর মধ্যে পার্থক্য কি  
/*==============================================================*/

var deffenenceForandWhile = `'FOR' loop used to obtain the result only when number of iterations
 is known. 'While' Loop used to satisfy the condition when the number of iterations is unknown`;

/*==============================================================
   33)তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। 
   তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।   
/*==============================================================*/

var iLearn = [
        'HTML',
        'CSS',
        'Bootstrap',
        'tailwind',
        'Responsive',
        'HTML5',
        'CSS3',
        'Javascript',
        'Array',
        'Loop',
        'Condition',
        'Variable',
        'Operator',
        'parseInt()',
        'parseFloat()',
        'toFixed()',
        'indexOf()'
]
var length = iLearn.length;

for(learnIterate = 0; learnIterate < length; learnIterate++){
    console.log(iLearn[learnIterate])
}

/*==============================================================
   34) তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম 
   দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান 
   গুলা একটা একটা করে আউটপুট হিসেবে দেখাও   
/*==============================================================*/

var myMoble = ['symphony','itel','nokia','samsung','walton'];

var mobleLength = myMoble.length;

var mobile = 0;
while(mobile < mobleLength){
    console.log(myMoble[mobile]);
    mobile++;
}

/*==============================================================
   35) একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। 
   সেই জিনিস কোড করে দেখাও   
/*==============================================================*/

for(var jj = 30; jj <= 86; jj++){
    if(jj === 44){
        break;
    }
    console.log(jj)
}

/*==============================================================
   36) তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। 
   যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। 
   অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।    
/*==============================================================*/

var myBookPrice = [100,211,30,155,189,255,145];

var bookLength = myBookPrice.length;
for(var book = 0; book <= bookLength; book++){
    if(myBookPrice[book] > 200){
        continue;
    }
    console.log(myBookPrice[book]);
}
