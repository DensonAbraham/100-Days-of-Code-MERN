// Scope

// Window Scope
//scope.js
a = "JavaScript"; // is a window scope this found anywhere
b = 10; // this is a window scope variable
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

// Global scope
//scope.js
a = "JavaScript"; // is a global scope it will be found anywhere in this file
b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope_global() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope_global();
console.log(a, b); // JavaScript 10, accessible

// Local scope
//scope.js
a = "JavaScript"; // is a global scope it will be found anywhere in this file
b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope_local() {
  console.log(a, b); // JavaScript 10, accessible
  let c = 30;
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let d = 40;
    console.log(a, b, c); // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b); // JavaScript 10
}
letsLearnScope_local();
console.log(a, b); // JavaScript 10, accessible

// Var

//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 1, 2, 3
}
console.log(i);

//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 1, 2, 3
}
// console.log(i), Uncaught ReferenceError: gravity is not defined

// .
// .
// .
// .
// .

//  Object

// .
// .
// .
// .
// .

// Creating an empty object
const person_empty = {};

// Creating an objecting with values

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Sarvesh",
  lastName: "Agrawal",
  age: 23,
  country: "India",
  city: "Bangalore",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};
console.log(person);

// Getting values from an object

// We can access values of object using two methods:

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

const person_obj = {
  firstName: "Sarvesh",
  lastName: "Agrawal",
  age: 23,
  country: "India",
  city: "Bangalore",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  "phone number": "+9199xxxxxx40",
};

// accessing values using .
console.log(person_obj.firstName);
console.log(person_obj.lastName);
console.log(person_obj.age);
console.log(person_obj.city);

// value can be accessed using square bracket and key name
console.log(person_obj["firstName"]);
console.log(person_obj["lastName"]);
console.log(person_obj["age"]);
console.log(person_obj["city"]);

// for instance to access the phone number we only use the square bracket method
console.log(person_obj["phone number"]);

// Creating object methods
const person_method = {
    firstName: "Sarvesh",
    lastName: "Agrawal",
    age: 23,
    country: "India",
    city: "Bangalore",
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
console.log(person_method.getFullName())


// Setting new key for an object

const person_new_key = {
    firstName: 'Sarvesh',
    lastName: 'Agrawal',
    age: 23,
    country: 'India',
    city: 'Bangalore',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person_new_key.nationality = 'Indian'
  person_new_key.country = 'India'
  person_new_key.title = 'teacher'
  person_new_key.skills.push('AWS')
  person_new_key.skills.push('Docker')
  person_new_key.isMarried = false
  
  person_new_key.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person_new_key)
  console.log(person_new_key.getPersonInfo())


//  Object Methods
const person_copy_obj = {
    firstName: 'Sarvesh',
    lastName: 'Agrawal',
    age: 23,
    country: 'India',
    city: 'Bangalore',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Somewhere',
      pobox: 560023,
      city: 'Bangalore'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
//   Object.assign: To copy an object without modifying the original object
  const copyPerson = Object.assign({}, person_copy_obj)
  console.log(copyPerson)

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// Getting object values using Object.values()
// Object.values:To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))