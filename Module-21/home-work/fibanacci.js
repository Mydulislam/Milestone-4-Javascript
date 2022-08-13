// [2,4,6,10,16,26,42............]

let fiboNumber = [2,4];

for(let i = 2; i <= 15; i++){
    fiboNumber[i] = fiboNumber[i-1] + fiboNumber [i-2]
}
console.log(fiboNumber)