// Usning While loop
var dailyotherMyWork = [
    'Unlock the module at 8 PM',
    'Watch the video and practice quickly',
    'Take notes while watching the video',
    'After completing the module, practice the whole module by myself',
    'understand',
    'not understand'
];
var i=0;
var length = dailyotherMyWork.length;
var doubleLength = length*2;
while(i < doubleLength){
    if(dailyotherMyWork[i] === undefined){
            var z = dailyotherMyWork[i-6];
            if(z == 'not understand'){
                console.log(z + ' go to the support session')
            }
            else{
                console.log(z)
            }  
    }
    else{
        if(dailyotherMyWork[i] === 'not understand'){
            console.log(dailyotherMyWork[i] + ' go to the support session')
        }
        else{
            console.log(dailyotherMyWork[i]);
        } 
    }
    i++
}