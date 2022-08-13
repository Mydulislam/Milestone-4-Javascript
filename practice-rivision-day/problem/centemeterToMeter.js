function centimeterToMeter(cm){
    let meter = cm / 100;
    return meter;
}

let myMeter = centimeterToMeter(12);

console.log(myMeter)


// meterToCentimeter

function meterToCentimeter(mymeter){
    let centimeter = mymeter * 100;
    return centimeter;
}

let isMeter = meterToCentimeter(12);

console.log(isMeter)