function ticketSave(ticketQuantity){
    let firstHundredTicketPrice = 100;
    let secondHundredTicketPrice = 90;
    let thirdHundredTicketPrice = 70;
    let amount;
    if(ticketQuantity <= 100){
        amount = ticketQuantity * firstHundredTicketPrice;
    }
    else if(ticketQuantity <= 200){
        amount = 100 * firstHundredTicketPrice;
        let amount2 = (ticketQuantity - 100) * secondHundredTicketPrice;
        amount += amount2;
    }
    else{
        amount = 100 * firstHundredTicketPrice;
        let amount3 = 100 * secondHundredTicketPrice;
        let amount4 = (ticketQuantity - 200) * thirdHundredTicketPrice;
        amount += amount3 + amount4;
    }
    return amount;
}

let totalPrice = ticketSave(100);
let totalPrice2 = ticketSave(120);
let totalPrice3 = ticketSave(220);
console.log(totalPrice , totalPrice2, totalPrice3);


