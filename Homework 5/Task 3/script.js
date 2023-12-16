let recipeName = document.getElementById("recipeName");
let nameIngredements = document.getElementById("nameOfIngredements");
let numberOfIngredments = document.getElementById("numberOfIngredements");
let userInputForRecipeName = prompt("Enter name of recipe");
recipeName.innerText = `Name of recipe is : ${userInputForRecipeName}`;
let userInputFornumberOfIngredments = Number(
  prompt("Enter number of ingredements")
);
numberOfIngredments.innerText = `Number od ingredements is : ${userInputFornumberOfIngredments}`;
let nameOfIngredements = prompt("Enter name od ingredements");
let arrayOfIngredients = nameOfIngredements.split(",");
for (let i = 0; i < arrayOfIngredients.length; i++) {
  nameIngredements.innerHTML += `
          <li>${arrayOfIngredients[i]}</li>
      `;
}
