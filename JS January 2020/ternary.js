
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message;

randomNumber % 2 === 0
    ? 
    message = `The number ${randomNumber} is even!!!`
    :
    message = `The number ${randomNumber} is odd!!!`;

console.log(message);



/**Use case of  ternary operator */

// let notice, subscribed = document.querySelector(".subscribe");

// subscribed.addEventListener("change", ()=> {
//     notice = subscribed.checked ? "Thank You!" : "Please Subscribe!";
// console.log(notice);
// });
