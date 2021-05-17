
  /*
  "herbivore" if an animal eats plants
  "carnivore" if an animal eats animals
  "omnivore" if an animal eats plants and animals
  "undefined" if an animal doesn't eat plants or animals
  */

  var eatsPlants = false;
  var eatsAnimals = false;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

console.log(category);