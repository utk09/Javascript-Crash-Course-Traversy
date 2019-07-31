// all code will run in Chrome/Firefox Console.
/*
Console in Chrome(Windows) can be found as CTRL+SHIFT+I
Console in Chrome(Mac) can be found as CMD+SHIFT+I
*/
console.log("hello from console log---");
console.error("this is console error---");
console.warn("this is console warning---");

const name = "john wick";
const age = 20;

console.log("My name is", name, "and I am", age);

console.log("My name is " + name + " and I am " + age);

const hello = `My name is ${name} and I'm ${age}`;
console.log(hello)

//string methods
const s = "Hi-there!";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split('-'))

//arrays in javascript
const numbers = new Array(1, 23, 4, 43, 231, 43);
console.log(numbers)

const fruits = ['apple', 'mango', 'chikoo'];
console.log(fruits);

console.log(fruits[2]); //find item at index 2. Note that arrays start at 0.

fruits[1] = 'strawberry' //add at index 1
console.log(fruits)

fruits.push('banana'); //add to last
console.log(fruits);

fruits.pop() // remove last
console.log(fruits);

fruits.unshift('avacado') // add to 0th index
console.log(fruits);

console.log(Array.isArray(fruits)); // check if array or not

console.log(fruits.indexOf('apple')) //find index value of an item

//create object. Objects are key-value pairs
const person = {
    fName: 'Baba',
    lName: 'Yaga',
    age: 35,
    hobbies: ['movies', 'guns', 'wrestling', 'pencil'],
    address: {
        street: 'Hotel Continental',
        city: 'New York'
    }
};
console.log(typeof (person))
console.log(person);
console.log(person.fName, person.lName);
console.log(person.hobbies[1]);
console.log(person.address.street);
// make keys a variable
const {
    fName,
    lName,
    address: {
        city
    }
} = person;
console.log(fName, lName, city);

person.email = 'babyaga@hitmanforhire.com'; // add item in object
console.log(person)

//make a ToDO object
const ToDo = [{
        id: 1,
        text: 'make coffee',
        isCompleted: true

    },
    {
        id: 2,
        text: 'push code',
        isCompleted: false

    },
    {
        id: 3,
        text: 'go shopping',
        isCompleted: true

    }
];
console.log(typeof (ToDo));
console.log(ToDo);
console.log(ToDo[1].text);

ToDo[2].isCompleted = false;
console.log(ToDo);

//convert to JSON
const todoJSON = JSON.stringify(ToDo);
console.log(todoJSON);

//For Loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`printing number :: ${i}`);
}

// while loop

let x = 0;
while (x < 16) {
    console.log(`while loop number printed :: ${x}`);
    x++;
}

//make a ToDO object
const ToDos = [{
        id: 1,
        text: 'make coffee',
        isCompleted: true

    },
    {
        id: 2,
        text: 'push code',
        isCompleted: false

    },
    {
        id: 3,
        text: 'go shopping',
        isCompleted: true

    }
];

console.log(ToDos)
//looping through arrays - method 1
for (let y = 0; y < ToDos.length; y++) {
    console.log(ToDos[y].text)
}

// looping over arrays - method 2
for (let m of ToDos) {
    console.log(m.isCompleted)
}

// looping over arrays - method 3 -  high order function "forEach"
ToDos.forEach(function (n) {
    console.log("forEach Method output -- \n", n.text);
})

// looping over arrays - method 4 -  using "map" to create arrays
const ToDOtext = ToDos.map(function (p) {
    return p.text;
})

console.log(ToDOtext);

// Looping over arrays - method 5 - using "filter" to define specific conditions

const toDoComplete = ToDos.filter(function (q) {
    return q.isCompleted === true;
})

console.log(toDoComplete);

/* Looping over arrays - method 5 - using "filter" to define specific conditions
and pull out specific values
*/
const toDoComplete_text = ToDos.filter(function (r) {
    return r.isCompleted === true;
}).map(function (r) {
    return r.text
})

console.log(toDoComplete_text);

/*
Simple conditionals
*/

const b = 15;
const c = 25;

if (b > 16) {
    console.log("b greater than 16");
} else if (c < 29) {
    console.log("c less than 29");
} else {
    console.log("something else")
}

if (b < 14 || c > 25) {
    console.log("b < 14 or c > 25");
} else if (b === 15 && c === 25) {
    console.log("b === 15 and c === 25");
} else {
    console.log("something else");
}

//iternary operators

const color = c > 21 ? 'red' : 'blue';
console.log(color);

// switch statements

switch (color) {
    case 'red':
        console.log("color is red");
        break;
    case 'blue':
        console.log("color is blue");
        break;
    default:
        console.log("color is neither red nor blue");
        break;
}

// Function to add two numbers

function addNumbers(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNumbers(5, 5));

// arrow function to subtract two numbers

const subNumbers = (num3, num4) => {
    return num3 - num4;
}
console.log(subNumbers(7, 4));

// constructor function - object oriented programming
function Person(firstName, lasteName, dob) {
    this.firstName = firstName;
    this.lasteName = lasteName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
}

// instantiate object
const person1 = new Person('John', 'Wick', '4/5/1980');
const person2 = new Person('Jenny', 'Lark', '5/2/1995');

console.log("person1 :: \n", person1);
console.log("person2.lastName :: \n", person2.lasteName);
console.log("person1.dob :: \n", person1.dob);
console.log("person2.dob.year :: \n", person2.dob.getFullYear());
console.log("person1.dob.year :: \n", person1.getBirthYear());

// Prototype

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lasteName}`
}
console.log("person1.getFullName :: \n", person1.getFullName());
console.log("person1", person1);

// Classes

class Factory {
    constructor(factoryName, factoryPlace, dateOfOpening) {
        this.factoryName = factoryName;
        this.factoryPlace = factoryPlace;
        this.dateOfOpening = dateOfOpening;
    }

    getFactoryNamePlace() {
        return `${factoryName} ${factoryPlace}`;
    }

    getFactoryLaunch() {
        return this.dateOfOpening.getFullYear();
    }
}

// instaniate object
const factory1 = new Factory('IndiaBulls', 'Chembur', '12-06-1979');
const factory2 = new Factory('Qripsy', 'Mumbai', '31-07-2019');

console.log("factory 1 :: \n", factory1);
console.log("factory 2 :: \n", factory2);