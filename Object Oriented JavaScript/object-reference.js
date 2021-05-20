const parrot = {
    group: 'bird',
    color: 'blue',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };
  
const pigeon = {
    group: 'bird',
    color: 'blue',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };

  // parrot and pigeon is referring to different objects
console.log(parrot === pigeon);   // false


//Objects are passed by reference
const myBird = parrot;

console.log(myBird === parrot);  // true


//Objects are mutable
myBird.color = 'red';

console.log(myBird.color);
console.log(parrot.color);

