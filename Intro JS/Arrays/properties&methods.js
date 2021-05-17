const donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];


donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";

console.log(donuts);

console.log(donuts.length);

// push and pop methods
donuts.pop();
donuts.push("maple walnut");
donuts.push("sprinkled");


console.log(donuts.length);

console.log(donuts);

//splice method to remove donut at index 1 and add 2 more donuts there
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); 

console.log(donuts);

// splice method to add two donuts at specified location without removing donuts
donuts.splice(-2, 0, "chocolate frosted", "glazed");
