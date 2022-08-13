function paperRequirements(firstQuantity, secondQuantity, thirdQuantity){
    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;

    let firstBookTotalPage = firstBookPage * firstQuantity;
    let secondBookTotalPage = secondBookPage * secondQuantity;
    let thirdBookTotalPage = thirdBookPage * thirdQuantity;

    let totalPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalPage;
}

let myTotalBookPage = paperRequirements(2, 3, 4);
console.log(myTotalBookPage);