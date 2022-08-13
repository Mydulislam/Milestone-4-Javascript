function totalWood(chairpics, tablePcs, bedpcs){
    let chair = 2 ;
    let table = 3 ;
    let bed = 5 ;

    let chairWood = chair * chairpics;
    let tableWood = table * tablePcs;
    let bedWood = bed * bedpcs;
    let total = chairWood + tableWood + bedWood;
    return total;
}

let woodCount = totalWood(3,2,3);
console.log(woodCount);