// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(3));
}

// Argument 2 - an inline function expression
emotions ("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (let i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});