const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
      return this.height += 1;
    },
    identify: function (){
        console.log(`A ${this.height} meter tall ${this.type} tree.`);
    }
  };

  // object can access property of its own using this keyword
  tree.identify();
  console.log(tree.growOneFoot());


// Extracting properties and values of objects
  const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
  };

console.log(Object.keys(triangle));    //  [ 'type', 'sides', 'sumOfAngles', 'equilateral', 'equiangular' ]
console.log(Object.values(triangle));  //  [ 'polygon', 3, 180, true, true ]