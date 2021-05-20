// immediately invoked function expression and private scope
(function myName(name) {
      const hi = 'Hi!';
      return function () {
        console.log(hi + name);
      }})('Andrew');