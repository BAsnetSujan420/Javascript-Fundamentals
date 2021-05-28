class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// build subclass extending super class
class Bicycle extends Vehicle {
    constructor(color, wheels = 2, horn = 'honk honk'){
        super(color);
        this.wheels = wheels;
        this.horn = horn;
    }
    
    honkHorn(){
       super.honkHorn();
    }
    
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep

const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
