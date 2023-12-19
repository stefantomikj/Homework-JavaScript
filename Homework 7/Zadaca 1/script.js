//Homework 1

/*let nameAnimal = document.getElementById("name");
let kindAnimal = document.getElementById("kind");
let button = document.getElementById("myButton");
let result = document.getElementById("result");
let animalObject = {
  name: nameAnimal.value,
  kind: kindAnimal.value,
  speak: function () {
    return this.name + " " + "says : Hey Bro";
  },
};
console.log(animalObject);
console.log(animalObject.speak());
result = animalObject.speak();*/

let animalObject = {
  name: "Koko",
  kind: "dog",
  speak: function () {
    return this.name + " " + "says : Hey Bro";
  },
};
console.log(animalObject);
console.log(animalObject.speak());
