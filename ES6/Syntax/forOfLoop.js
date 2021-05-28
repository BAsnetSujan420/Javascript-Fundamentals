// additional properties of array's prototype will appear in (for in loop)
Array.prototype.decimalfy = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toFixed(2);
    }
  };
  
  const digits = [0, 1, 2, 9];
  
  for (const index in digits) {
    console.log(digits[index]);
  }

  // for of loop iterate over values and does not loops over array's prototype
  for (const digit of digits) {
    console.log(digit);
  }

  // There is also no way to stop or break a forEach loop

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  for (const day of days) {
    var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
    console.log(upperDay);
  }
 