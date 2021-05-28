
class Plane {
    constructor(numEngines) {
      this.numEngines = numEngines;
      this.enginesActive = false;
    }
  
    startEngines() {
      console.log(`Starting ${this.numEngines} engines.`);
      this.enginesActive = true;
    }
  }

//   ES6 classes are just a mirage and hide the fact that prototypal inheritance 
  function Plane2(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  
  // methods "inherited" by all instances
  Plane2.prototype.startEngines = function () {
    console.log(`Starting ${this.numEngines} engines.`);
    this.enginesActive = true;
  };
  

  var richardsPlane = new Plane(2);
  richardsPlane.startEngines();
  
  var jamesPlane = new Plane2(4);
  jamesPlane.startEngines();

  console.log(typeof Plane);