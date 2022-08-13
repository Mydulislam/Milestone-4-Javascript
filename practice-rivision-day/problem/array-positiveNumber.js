let numbers = [50, 30, 12, 16, 18, 45, 86, 17, -18, -19, 20, 25];

let positiveNum = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        break;
    }
    else{
        positiveNum.push(numbers[i])
    }
}
console.log(positiveNum);