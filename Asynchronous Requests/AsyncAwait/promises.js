let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  holder: ["cone", "cup", "stick"],
  liquid: ["water", "ice"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed."));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log(`The fruit was chopped.`));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Machine was started."));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Icecream was placed on ${stocks.holder[0]}.`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[0]} was added as toppings.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Ice cream was served."));
  })
  .catch(() => {
    console.log("Customer left.");
  })
  .finally(() => {
    console.log("Day ended, shop is closed.");
  });
