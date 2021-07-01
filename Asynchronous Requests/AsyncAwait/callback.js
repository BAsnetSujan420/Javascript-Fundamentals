let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  holder: ["cone", "cup", "stick"],
  liquid: ["water", "ice"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected.`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped.");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

        setTimeout(() => {
          console.log("Machine was started.");
          setTimeout(() => {
            console.log(`Icecream was placed on ${stocks.holder[0]}.`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings.`);

              setTimeout(() => {
                console.log("Serve icecream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
