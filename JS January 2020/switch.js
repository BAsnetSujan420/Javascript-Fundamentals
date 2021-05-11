let message;

switch(new Date().getDate()){
    case 4: 
    case 5:
        message = "It's almost the weekend!";
        break;
    case 0:
    case 6:
        message = "It's the weekend!";
        break;
    default:
        message = "looking forward to the weekend!";
}

console.log(message);
