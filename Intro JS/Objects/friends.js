
let facebookProfile = {

    name: "Udacian",
    friends: 10,
    messages: ['Learn Data Science', 'Intro to Javascript', 'Android Development'],
    postMessage: function(message){
        this.messages.push(message);
    },
    deleteMessage: function(index){
        this.messages.splice(index, 1);
    },
    addFriend: function(){
        this.friends = this.friends + 1;
    },
    removeFriend: function(){
        if(this.friends > 0){
            this.friends = this.friends - 1;
        }
    }
}
facebookProfile.addFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.postMessage("We are the best!!!");

console.log(facebookProfile);