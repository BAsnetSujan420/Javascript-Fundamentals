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