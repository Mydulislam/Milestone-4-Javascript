
function largeName(nameIs){
    let temp = nameIs[0].length;
    for(let i = 0 ; i < nameIs.length; i++){
        if(temp < nameIs[i].length){
            temp = nameIs[i];
        }
    }
    return temp;
}
let friends = ["rahim", "karim", "abdul", "mimi+mydul", "heroAlom"];
let largeNameIs = largeName(friends);
console.log(largeNameIs);