//Example to show await halts the task

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  holder: ["cone", "cup", "stick"],
  liquid: ["water", "ice"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");
  await toppings_choice();
  console.log(" D ");
  console.log(" E ");
}

kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
