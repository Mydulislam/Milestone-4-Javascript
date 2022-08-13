function maxWithArray(myArray){
    let temp = myArray[0]
    for(let i = 0; i < myArray.length; i++){
        if(temp < myArray[i]){
            temp = myArray[i];
        }
    }
    return temp;
}

let heightNumber = [14,75,8,19,21,10];
let arrayMax = maxWithArray(heightNumber);
console.log('The tallest boy height :', arrayMax ,'cm');