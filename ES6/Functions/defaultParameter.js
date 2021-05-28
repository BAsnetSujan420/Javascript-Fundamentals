//default function parameter
function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
  }
  
  greet(); // Welcome Student!
  greet('Tyler'); // Welcome Tyler!
  greet('Kinosi', 'Howdy'); // Howdy Kinosi!


// default function parameter passing array with destructuring
  function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
  }
  
  createGrid([]); // Generates a 5 x 5 grid
  createGrid([2]); // Generates a 2 x 5 grid
  createGrid([2, 3]); // Generates a 2 x 3 grid
  createGrid([undefined, 3]); // Generates a 5 x 3 grid


  // default function parameter passing objects with destructuring
  function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
  
  createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
  createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
  createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
  createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.