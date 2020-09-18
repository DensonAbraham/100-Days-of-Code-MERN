// Booleans

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

// undefined
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

// null
let empty = null;
console.log(empty); // -> null , means no value

// Assignment Operators
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

// Comparison Operators
console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// Logical Operators
// && ampersand operator example

let check = 4 > 3 && 10 > 5; // true && true -> true
check = 4 > 3 && 10 < 5; // true && false -> false
check = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

check = 4 > 3 || 10 > 5; // true  || true -> true
check = 4 > 3 || 10 < 5; // true  || false -> true
check = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

check = 4 > 3; // true
check = !(4 > 3); //  false
isLightOn = true;
isLightOff = !isLightOn; // false
isMarried = !false; // true

// Increment Operator
// Pre-increment
let count = 0;
console.log(++count); // 1
console.log(count); // 1

// Post-increment
count = 0;
console.log(count++); // 0
console.log(count); // 1

// Decrement Operator
// Pre-decrement
count = 0;
console.log(--count); // -1
console.log(count); // -1

// Post-decrement
count = 0;
console.log(count--); // 0
console.log(count); // -1

// Ternary Operators
isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

//   Window Methods

// Window alert() method
alert("Welcome to 100daysofcode");

// Window prompt() method
number = prompt("Enter number", "number goes here");
console.log(number);

// Window confirm() method
const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box

// Date Object
// Creating a time object
let now = new Date();
console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// Getting full year
console.log(now.getFullYear()); // 2020

// Getting month
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)

// Getting date
console.log(now.getDate()); // 4, because the day of the month is 4th,  day(1-31)

// Getting day
console.log(now.getDay()); // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

// Getting hours
console.log(now.getHours()); // 0, because the time is 00:56:41

// Getting minutes
console.log(now.getMinutes()); // 56, because the time is 00:56:41

// Getting seconds
console.log(now.getSeconds()); // 41, because the time is 00:56:41

// Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

// Using getTime()
console.log(now.getTime()); // 1600409682014, this is the number of seconds passed from January 1, 1970 to September 18, 2020 11:45:00

// Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1600409682014, this is the number of seconds passed from January 1, 1970 to September 18, 2020 11:45:00

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
