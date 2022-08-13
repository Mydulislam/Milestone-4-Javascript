function dublicatItems(numbers){
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        if(arr.includes(numbers[i]) === false){
            arr.push(numbers[i])
            }
    }
    return arr;
}
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let item = dublicatItems(numbers)
console.log(item)


var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let myUniqArray = [];
for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] ){

        }
    }
}

