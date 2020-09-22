// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function

// Function Declaration
// function without parameter,  a function which make a number square
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square(); // 4

// Function returning value
function printFullName_local() {
  let firstName = "Sarvesh";
  let lastName = "Agrawal";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName_local());

// Function with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10)); // should be called with one argument

// Function with two parameters

function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Sarvesh", "Agrawal"));

// Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

// Unlimited number of parameters in regular function
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(9, 8, 7, 6, 5, 4, 3, 2));

// Arrow Function
const areaOfCircle_arrow = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaOfCircle(10));

const sumAllNums_arrow = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums_arrow(1, 2, 3, 4)); // 10
console.log(sumAllNums_arrow(10, 20, 13, 40, 10)); // 93

// Anonymous Function
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

// Expression Function

// Function expression
square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4

// Self Invoking Function

(function (n) {
  console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// Arrow Function

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n;
}

console.log(square(2)); // 4

square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
square = (n) => n * n; // -> 4

console.log(square(3));

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

let country = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(country));

let printFullName_arrow = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName_arrow("Sarvesh", "Agrawal"));

// The above function has only the return statement, therefore, we can explicitly return it as follows.
printFullName_oneline = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(printFullName_oneline("Sarvesh", "Agrawal"));

// Function with default parameters

function greetings(name = "Agrawal") {
  let message = `${name}, welcome to 100 Days Of Code!`;
  return message;
}

console.log(greetings());
console.log(greetings("Sarvesh"));

function calculateAge(birthYear, currentYear = 2020) {
  let age = currentYear - birthYear;
  return age;
}
console.log("Age: ", calculateAge(1997, 2019));
console.log("Age: ", calculateAge(1997));

let weightOfObject = (mass, gravity = 9.81) => {
  let weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
};

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon

calculateAge = (birthYear, currentYear = 2020) => currentYear - birthYear;
console.log("Age: ", calculateAge(1997));

weightOfObject = (mass, gravity = 9.81) => mass * gravity + " N";

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon
