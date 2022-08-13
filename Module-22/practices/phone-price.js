let phoneInfo = [
    {PhoneName : 'Nokia', price : 40000, color: 'gold'},
    {PhoneName : 'Oppo', price : 20000, color: 'black'},
    {PhoneName : 'Samsung', price : 10000, color: 'dimond'},
    {PhoneName : 'Apple', price : 80000, color: 'white'},
    {PhoneName : 'Vivo', price : 25000, color: 'gold'}
]

let myprice = phoneInfo[0]

for(let i = 0 ; i < phoneInfo.length; i++){
    let priceItem = phoneInfo[i];
    if(myprice.price > priceItem.price){
        myprice = phoneInfo[i];
    }
}
console.log(myprice);