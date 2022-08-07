function findLeapYear(leapArray){
    let leap = [];
    for(let i = 0; i <= leapArray.length; i++){
        if((leapArray[i] % 4 === 0 || leapArray[i] % 400 === 0) && leapArray % 100 !== 0){
            leap.push(leapArray[i]);
        }
    }
    return leap;
}

let leapYear = [2023,2024,2025,2028,2030];
let result = findLeapYear(leapYear);
console.log(result) // [2024,2028]
