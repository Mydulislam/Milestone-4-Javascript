function totalShoping(product){
    let total = 0;
    for(let i = 0; i < product.length; i++ ){
        total = total + (product[i].price * product[i].quantity);
    }
return total;
}

let shopingElements = [
    {productName : 'shirt', price: 250, quantity: 3},
    {productName : 'pant', price: 150, quantity: 6},
    {productName : 't-shirt', price: 300, quantity: 2},
    {productName : 'pajama', price: 200, quantity: 6},
    {productName : 'punjabi', price: 250, quantity: 3}
]

let totalCost = totalShoping(shopingElements);
console.log('Total Cost is: ' , totalCost);