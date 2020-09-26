const callback = (n) => {
  return n ** 2;
};
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

// ***************returning a function*********************

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// **************Interval, execute every 2 seconds********************

function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 2000);

// *************Time_out , wait for 2 seconds ***************************

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 22000);

// ****************for each loop************

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum = sum + num));
console.log(sum);

// ******** Mapping***************

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// ************************** filtering ********************************

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

// *********** every can be uses to check if all elements follow a simple condition *****************

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const arAllStr = names.every((name) => typeof name === "string");

console.log(arrAllStr);

// ******************* find() can be used to find specific elements ******************

const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

// ********************* findIndex() can be used to find location of a element or an element with specific condition  ***************

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages = [24, 22, 25, 32, 35, 18];

const result = names.findIndex((name) => name.length > 7);
console.log(result);

const age = ages.findIndex((age) => age < 20);
console.log(age);

// ************** some () is same as every() but here the condition need to be true for at least one of the **************

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => {
  return b === true;
});

console.log(areSomeTrue);

// ************************** sort () sorts the array **********

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());
// ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar'] sorted result

// **************** sorting decimel and special numbers **************

const numbers = [9.81, 3.14, 100, 37];

console.log(numbers.sort());
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

// for decending oreder

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

// ****************** Sorting Object Arrays ****************************

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
