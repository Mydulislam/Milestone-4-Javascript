var array = [21,25,26,28,21];
var arrayCheck = Array.isArray(array);

var isInclude = array.includes(29)
console.log(arrayCheck , isInclude);

var arr1 = [1,2,3,6];
var arr2 = [5,6,9];

let adjust = arr1.concat(arr2);
console.log(adjust);