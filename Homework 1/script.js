//task 1

let phoneAmount = 119.95;
const taxRate = 5;
const taxAmount = phoneAmount * (taxRate / 100);
let numberOfPieces = 30;
let totalPrice = numberOfPieces * (phoneAmount + taxAmount);
console.log(totalPrice);

//task 2
const minute = 60;
let numberOfMinutes = 40;
let minuteToSeconds = numberOfMinutes * minute;
console.log(minuteToSeconds);

//task 3

let number = 9;
number++;
console.log(number);

// task 4

const baseOfTriangle = 15;
const heightOfTriangle = 20;
const areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2;
console.log("Area of Triangle is: " + areaOfTriangle);

//task 5

let lengthRectangle = 20;
let widthRectangle = 30;
let perimeterRectangle = (lengthRectangle + widthRectangle) * 2;
console.log("Perimeter of Rectangle is: " + perimeterRectangle);

//task 6

let radiusOfCircle = 10;
const PI = 3.14159;
let circleArea = PI * radiusOfCircle ** 2;
console.log("Area of Circle is: " + circleArea);
