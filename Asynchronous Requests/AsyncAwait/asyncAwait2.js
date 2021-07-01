let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  holder: ["cone", "cup", "stick"],
  liquid: ["water", "ice"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = !true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed."));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} is selected`);
    console.log("Start the production.");
    await time(2000);
    console.log("Chop the fruit.");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added.`);
    await time(1000);
    console.log("Start the machine");
    await time(2000);
    console.log(`Ice cream placed on ${stocks.holder[0]}.`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was added as toppings.`);
    await time(1000);
    console.log("Ice cream served!!!");
  } catch (error) {
    console.log("Customer left.");
  } finally {
    console.log("Day ended, shop is closed!");
  }
}

kitchen();
