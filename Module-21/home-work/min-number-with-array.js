function minWithArray(myArray){
    let temp = myArray[0]
    for(let i = 0; i < myArray.length; i++){
        if(temp > myArray[i]){
            temp = myArray[i];
        }
    }
    return temp;
}

let heightNumber = [14,75,8,19,21,10];
let arrayMin = minWithArray(heightNumber);
console.log('The smallest boy height :', arrayMin ,'cm');