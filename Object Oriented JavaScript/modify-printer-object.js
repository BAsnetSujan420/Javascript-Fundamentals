const printer = {
    on: true,
    mode: 'black and white'
  }

  // adding property on printer
printer.remainingSheets = 168;

printer.print = function(){console.log("The printer is printing.")};

printer.print();

// modifying property on printer
printer.remainingSheets = 100;

console.log(printer);

//deleting mode property on printer
  delete printer.mode;

console.log(printer);

