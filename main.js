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
for (let m of ToDos){
    console.log(m.isCompleted)
}