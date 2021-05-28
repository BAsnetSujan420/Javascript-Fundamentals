
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

  var richardsPlane = new Plane(2);
  richardsPlane.startEngines();
  
  var jamesPlane = new Plane(4);
  jamesPlane.startEngines();