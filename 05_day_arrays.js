// create an empty array

// Using Array constructor

// syntax
let arr = Array();
// or
// let arr = new Array()
console.log(arr); // []

// Using square brackets([])
// This the most recommended way to create an empty list
arr = [];
console.log(arr);

// create an array with values

let numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
let fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
let vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
let animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
let webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
let countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Array can have items of different data types
arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);

// Creating an array using split

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);

// Accessing array items using index

fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers.length); // => to know the size of the array, which is 6
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0
console.log(numbers[5]); //  -> 100

lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // -> 100

// Array Constructor
const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// Creating static values with fill
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// Concatenating array using concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// Getting index an element in arr array
numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(5)); // -> 4

// Check items in a list
fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0

if (index != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}
// This fruit does exist in the array

// we can use also ternary here
index != -1
  ? console.log("This fruit does exist in the array")
  : console.log("This fruit does not exist in the array");

// Getting last index of an element in array
numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1

// Include
numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false

// Checking array

numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true

// Converting array to string
let names = ["Sarvesh", "Denson", "Janeeta", "Nithin"];
console.log(names.toString()); // Sarvesh,Denson,Janeeta,Nithin

// Joining array elements
numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5

names = ["Sarvesh", "Denson", "Janeeta", "Nithin"];
console.log(names.join()); // Sarvesh,Denson,Janeeta,Nithin
console.log(names.join("")); //SarveshDensonJaneetaNithin
console.log(names.join(" ")); //Sarvesh Denson Janeeta Nithin
console.log(names.join(", ")); //Sarvesh, Denson, Janeeta, Nithin
console.log(names.join(" # ")); //Sarvesh # Denson # Janeeta # Nithin

// Slice array elements
numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice()); // -> remove all items

numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(0, 1)); // remove the first item

numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Adding item to an array using push
// syntax
arr = ["item1", "item2", "item3"];
arr.push("new item");

console.log(arr);
// ['item1', 'item2','item3','new item']

// Removing the end element using pop
numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end

console.log(numbers); // -> [1,2,3,4]

// Removing an element from the beginning
numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning

console.log(numbers); // -> [2,3,4,5]

// Add an element from the beginning
numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> add one item from the beginning

console.log(numbers); // -> [0,1,2,3,4,5]

// Reversing array order
numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order

console.log(numbers); // [5, 4, 3, 2, 1]

// Sorting elements in array
webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// Array of Arrays
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
