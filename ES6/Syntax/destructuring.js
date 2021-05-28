//destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// destructuring properties from an object
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
  };
  
  const {type, color, carat} = gemstone;
  
  console.log(type, color, carat);


// destructuring specific values from array  
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one,,,two,,,,three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
