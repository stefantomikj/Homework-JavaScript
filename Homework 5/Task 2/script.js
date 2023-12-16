let arrayNumbers = [3, 5, 6, 8, 9];
let myProducts = document.getElementById("numbersArray");
let result = document.getElementById("sum");
function printNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    myProducts.innerHTML += `
            <li>Number is ${array[i]}</li>
        `;
  }
  return sum;
}

let sum1 = printNumbers(arrayNumbers);
result.innerText = sum1;
