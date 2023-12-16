//task 1

let storyInputs = ["Stefan", "excelent mood", "playing"];
function tellStory(name, mood, activity) {
  return `This is ${name} and he is good person. Today he is in ${mood}, and ${activity} all day`;
}

let result = tellStory(storyInputs[0], storyInputs[1], storyInputs[2]);
console.log(result);

//task 2

let arrayNumbers = [3, 5, 6, 8, 9];

function summaryNumbers(summary) {
  summary = 0;
  for (i = 0; i < arrayNumbers.length; i++) {
    summary = summary + arrayNumbers[i];
  }
  return summary;
}
let result1 = summaryNumbers(arrayNumbers);
console.log(result1);

//task5
let numbersArray = [3, 5, 6, 2, 11];

function findMinMaxSum(minNumber, maxNumber) {
  minNumber = Infinity;
  maxNumber = -Infinity;
  for (i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > maxNumber) {
      maxNumber = numbersArray[i];
    }
    if (numbersArray[i] < minNumber) {
      minNumber = numbersArray[i];
    }
  }
  return maxNumber + minNumber;
}
let minMaxSum = findMinMaxSum(numbersArray);
console.log(minMaxSum);

// task 4
let arrayFrom1To20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (i = 0; i < arrayFrom1To20.length; i++) {
  if (arrayFrom1To20[i] % 2 === 0) {
    console.log(`The number ${arrayFrom1To20[i]} "\n"`);
  } else if (arrayFrom1To20[i] % 2 !== 0) {
    console.log(`The number ${arrayFrom1To20[i]} "  "`);
  }
}

// task 3

let studentsArray = ["Hello", "there", "students", "of", "SEDC", "!"];
function students() {
  return ` ${studentsArray[0]} ${studentsArray[1]} ${studentsArray[2]} ${studentsArray[3]} ${studentsArray[4]} ${studentsArray[5]} `;
}
let resultOfStudentsArray = students(studentsArray);
console.log(resultOfStudentsArray);

// TASK 6

let firstNames = ["Stefan", "Trpe", "Goce"];
let lastNames = ["Tomik", "Trpovski", "Gocevski"];
let fullNames = [];
function fullNamesStudents() {
  for (i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }
  return fullNames;
}
let resultfullNames = fullNamesStudents(fullNames);
console.log(resultfullNames);
