function bestFriend(myFriends){

    let friend = myFriends[0];
    for(let i = 0; i < myFriends.length; i++){
        if(friend.length < myFriends[i].length){
            friend = myFriends[i];
        }
    }
    return friend;

}

let friends = ['Sumon', 'Abdul-malek', 'Hasinur', 'Omar-faruk', 'Jahid-hasan','Mydul']
let myBestFriend = bestFriend(friends);
console.log('My Best Friend Name is : ', myBestFriend);