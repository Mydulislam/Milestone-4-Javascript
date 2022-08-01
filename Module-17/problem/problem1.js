var fruits = ['Apple', 'Banana', 'Orange'];
var findIndexBanana = fruits.indexOf('Banana');
fruits[findIndexBanana] = 'Mango';

console.log(findIndexBanana);
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);