/*================================================
1) Convert Degree to Radian
=================================================*/
function radianToDegree (radian){
    if(typeof radian === 'number'){ // check type
    const pi = 3.14159265359;
    let degree = radian * (180 / pi); // main formula radian to degree
    degree = degree.toFixed(2); // two places after the decimal point(string)
    let degreeResult = parseFloat(degree); // convert floating number
    return degreeResult ;
    }
    else{
    return 'Please provide a number.';
    }
    }
    console.log(radianToDegree(25))
    /*==================================================
    2) Check Javascript File / Problem:2 isJavaScriptFile
    ===================================================*/
    function isJavaScriptFile(fileName){
    if(typeof fileName === 'string'){ // check type
    if(fileName.endsWith('.js')){ // check the last characters of '.js' extension
    return true;
    }
    else{
    return false;
    }
    }
    else{
    return 'Please Provide a string file name.';
    }
    }
    console.log(isJavaScriptFile('app.js'))
    /*======================================================
    3) Total Oil Price / Get total oil Price
    =======================================================*/
    function oilPrice(dieselAmount, petrolAmount, octaneAmount){
    if(typeof dieselAmount === 'number' && typeof petrolAmount === 'number' && typeof octaneAmount === 'number'){ // check type
    let diselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;
    let totalDeselPrice = diselPrice * dieselAmount; // total desel price (tk)
    let totalPetrolPrice = petrolPrice * petrolAmount; // total petrol price (tk)
    let totalOctanePrice = octanePrice * octaneAmount; // total octane price (tk)
    let oilTotalPrice = totalDeselPrice + totalPetrolPrice + totalOctanePrice; // total oil price (tk)
    return oilTotalPrice;
    }
    else{
    return 'Please provide a number amount.';
    }
    }
    console.log(oilPrice(0,2,3))
    /*=========================================================
    4) Find out the amount of public bus fair rate.
    ===========================================================*/
    function publicBusFare(peoples){
    if(typeof peoples === 'number'){ // check type
    let reservedBusRemain, microBusRemain;
    let publicBusRate = 250;
    if(peoples >= 50){
    reservedBusRemain = peoples % 50; // bus people remain or not
    microBusRemain = reservedBusRemain % 11; // micro bus people remain or not if (3 % 11 = 3) or (0 % 11 = 0)
    publicBusRate *= microBusRemain; // if micro bus people remain or not then multiply by 250
    }
    else{
    microBusRemain = peoples % 11; // micro bus people remain or not if (3 % 11 = 3) or (0 % 11 = 0)
    publicBusRate *= microBusRemain; // if micro bus people remain or not then multiply by 250
    }
    return publicBusRate;
    }
    else{
    return 'Please given a number.'
    }
    }
    console.log(publicBusFare("55"))
    /*=================================================
    5) Find out the best friend of an object.
    ===================================================*/
    function isBestFriend(friendOne, friendTwo){
    if(typeof friendOne === 'object' && typeof friendTwo === 'object'){ // check type
    if((friendOne.name === friendTwo.friend) && (friendTwo.name === friendOne.friend)){ // if both mached than best friend
    return true;
    }
    else{
    return false;
    }
    }
    else{
    return 'Please provide an object.'
    }
    }
    let firstFriendObj = {name : "doe", friend : "alex"}; // first object
    let secondFriendObj = 50; // second object
    console.log(isBestFriend(firstFriendObj , secondFriendObj))