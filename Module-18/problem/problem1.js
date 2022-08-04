/*var dailyWork = [
    'Unlock the module at 8 PM',
    'Watch the video and practice quickly',
    'Take notes while watching the video',
    'After completing the module, practice the whole module by myself',
    'If you do not understand something, join the support session'
];
for(var i = 0; i < dailyWork.length; i++){
    console.log(dailyWork[i]);
    if(i === 4){
        for(j=0; j < dailyWork.length; j++){
            console.log(dailyWork[j])
        }
    }
}
*/
//***********************************Defference Way*************************************

// var dailymyWork = [
//     'Unlock the module at 8 PM',
//     'Watch the video and practice quickly',
//     'Take notes while watching the video',
//     'After completing the module, practice the whole module by myself',
//     'If you do not understand something, join the support session'
// ];

// for(var k=0; k<10; k++){
//     if(dailymyWork[k] === undefined){
//         console.log(dailymyWork[k-5])
//     }
//     else{
//         console.log(dailymyWork[k])
//     }
// }

//************************************ */ other deffenent way********************************

var dailyotherMyWork = [
    'Unlock the module at 8 PM',
    'Watch the video and practice quickly',
    'Take notes while watching the video',
    'After completing the module, practice the whole module by myself',
    'If you do not understand something, join the support session'
];

var length = dailyotherMyWork.length;;
var doubleLenghe = length*2;

for(var i = 0, j = 0; i < doubleLenghe; i++){
    console.log(dailyotherMyWork[j]);
    j++;
    if(j === length){
        j=0;
    }
}
//************************************ */ Support Programming hero onujayi way********************************
var dailyheroMyWork = [
    'Unlock the module at 8 PM',
    'Watch the video and practice quickly',
    'Take notes while watching the video',
    'After completing the module, practice the whole module by myself',
    'If you do not understand something, join the support session'
];
for(var i = 0, j = 0; i < 10; i++){
    for(var j=0; j<dailyheroMyWork.length; i++){
        console.log(dailyheroMyWork[j]);
    }
}