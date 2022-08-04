/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে 
    আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

function uppercaseName(uppercaseValue){
    var convertLowerCase = uppercaseValue.toLowerCase();
    return convertLowerCase;
}
var myName = uppercaseName('BANGLADESH')
console.log(myName)
