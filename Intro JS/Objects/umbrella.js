var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close : function(){
        if(umbrella.isOpen === false){
            return "The umbrella is closed!"
        } else {
            return "Julia close the umbrella!"
        }
    }
};

console.log(umbrella.close())
