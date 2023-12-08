// task1

let number1 = 17;
let number2 = 20;
if (number1 > number2) {
  console.log(`${number1} is bigger number than ${number2}`);
} else {
  console.log(`${number2} is bigger number than ${number1}`);
}

//task2

let num1 = 20;
let num2 = 19;
let num3 = 17;
let highestNumber;

if (num1 > num2 && num1 > num3) {
  highestNumber = num1;
} else if (num2 > num1 && num2 > num3) {
  highestNumber = num2;
} else {
  highestNumber = num3;
}
console.log(highestNumber);

//task3

let inputNumber = 4;

if (inputNumber > 0) {
  console.log("Number is positive");
} else if (inputNumber < 0) {
  console.log("Number is negative");
} else if (inputNumber == 0) {
  console.log("Number is zero");
} else {
  console.log("Only enter number");
}

//task4

let number = prompt("Please enter number between 1-7");
let parseNumber = parseInt(number);
switch (parseNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Thuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    alert("Enter number between 1 - 7");
}

// task 5

let userInput = 57;
if (typeof userInput == "number") {
  console.log("User input is number");
} else {
  console.log("User input is not number");
}

//task 6

let Physics = 5;
let Chemistry = 4;
let Biology = 3;
let Mathematics = 5;
let Computer = 2;
let totalOfMarks = Physics + Chemistry + Biology + Mathematics + Computer;
let percentage = (totalOfMarks / 25) * 100;
if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else if (percentage >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

//task 7

let year = parseInt(prompt("Enter a year:"));
let zodiac = (year - 4) % 12;
if (zodiac === 0) {
  console.log(`The Chinese Zodiac sign for ${year} is Rat`);
} else if (zodiac === 1) {
  console.log(`The Chinese Zodiac sign for ${year} is Ox`);
} else if (zodiac === 2) {
  console.log(`The Chinese Zodiac sign for ${year} is Tiger`);
} else if (zodiac === 3) {
  console.log(`The Chinese Zodiac sign for ${year} is Rabit`);
} else if (zodiac === 4) {
  console.log(`The Chinese Zodiac sign for ${year} is Dragon`);
} else if (zodiac === 5) {
  console.log(`The Chinese Zodiac sign for ${year} is Snake`);
} else if (zodiac === 6) {
  console.log(`The Chinese Zodiac sign for ${year} is Horse`);
} else if (zodiac === 7) {
  console.log(`The Chinese Zodiac sign for ${year} is Goat`);
} else if (zodiac === 8) {
  console.log(`The Chinese Zodiac sign for ${year} is Monkey`);
} else if (zodiac === 9) {
  console.log(`The Chinese Zodiac sign for ${year} is Roster`);
} else if (zodiac === 10) {
  console.log(`The Chinese Zodiac sign for ${year} is Dog`);
} else if (zodiac === 11) {
  console.log(`The Chinese Zodiac sign for ${year} is Dog`);
}

//task 8

let inputMoney = prompt("How much money you have?");
if (inputMoney === null) {
  console.log("You didn't enter anything.");
} else if (inputMoney < 500) {
  console.log("You don't have much money");
} else if (inputMoney >= 500 && inputMoney < 1000) {
  console.log("You should buy meal.");
} else if (inputMoney >= 1000 && inputMoney < 5000) {
  console.log("You should go to trip");
} else {
  alert("Please enter number between 0 - 5000");
}
