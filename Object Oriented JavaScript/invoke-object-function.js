//call(), apply() and bind() is a method directly invoked onto a function.
const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
      console.log(`${this.title} is a classic novel`);
    }
  };

mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

const pride = {
    title: 'Pride and Prejudice'
  };
  
mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'


const andrew = {
    name: 'Andrew'
  };
  
function introduce(one, two) {
  console.log(`I'm ${this.name} and my favorite programming language is ${one} and ${two}.`);
}

//apply() is similar to call but it can accept multiple arguments
introduce.apply(andrew, ['Javascript', 'Python']);


const driver = {
  name: 'Danica',
  displayName: function () {
  console.log(`Driver Name: ${this.name}`);
  }
};
  
const car = {
  name: 'Fusion'
};

// bind() returns a new function with this bound to a specific object
driver.displayName.bind(car)();
