// convert hours to minute 
function convertMinute(hours){
    let minutes = hours * 60;
    return minutes;
}

let hours = convertMinute(4);
console.log(hours);


// convert hours to second

function convertSeconds(hour){
    let minute = hour * 60;
    let second = minute * 60;
    return second;
}

let myHours = convertSeconds(4);
console.log(myHours);