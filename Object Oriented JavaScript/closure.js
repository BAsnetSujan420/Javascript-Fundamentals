// allowing nested function to access variable outside of it
function myCounter() {
    let count = 0;
  
    return function () {
      count += 1;
      return count;
    };
  }

  const counter = myCounter();

  console.log(counter());

  console.log(counter());

  console.log(counter());

// every time function is created closure is created for that function