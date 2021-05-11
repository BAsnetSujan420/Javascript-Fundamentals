// Printing numbers every 2 seconds upto 5

let counter = 1;

const countInterval = setInterval(count, 2000);

function count(){
    console.log(counter++);

    if(counter > 5) {
        clearInterval(countInterval);
    }
}
