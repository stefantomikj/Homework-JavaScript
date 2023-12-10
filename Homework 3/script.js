//task 1

function inputTypes(input) {
  return input;
}

let result = inputTypes(5);
console.log(typeof result);
let result1 = inputTypes("stefan");
console.log(typeof result1);
let result2 = inputTypes();
console.log(typeof result2);
let result3 = inputTypes(true);
console.log(typeof result3);
let result4 = inputTypes({});
console.log(typeof result4);
let result5 = inputTypes(null);
console.log(typeof result5);

//task 2

function yearCalculator(humanYears, dogYears) {
  let inputChoise = parseInt(
    prompt(`Enter 1 to input human years. Enter 2 to input dog years`)
  );
  if (inputChoise == 1) {
    humanYears = parseInt(prompt("Enter human years"));
    let calculateDogYears = humanYears * 7;
    console.log(`Dog would have ${calculateDogYears} years`);
    return calculateDogYears;
  } else if (inputChoise == 2) {
    dogYears = parseInt(prompt("Enter dog years"));
    let calculateHumanYears = dogYears / 7;
    console.log(`Human would have ${calculateHumanYears} years`);
    return calculateHumanYears;
  } else {
    return "Enter number";
  }
}

let resultYearCalculator = yearCalculator();
console.log(resultYearCalculator);

//task 3

function atm(accountBalance, inputAmount, accountMoney) {
  inputAmount = parseInt(prompt("Enter amount"));
  accountMoney = 1000;
  accountBalance = accountMoney - inputAmount;
  if (inputAmount < accountMoney) {
    return `Amount withdrawn is ${inputAmount}. Money left on the account is ${accountBalance}`;
  } else if (inputAmount > accountMoney) {
    return "You don't have enough money";
  } else if (typeof inputAmount === null) {
    return "Thanks for use our ATM";
  } else {
    typeof inputAmount === undefined;
    return "Please enter amount";
  }
}
let cashAtm = atm();
console.log(cashAtm);
