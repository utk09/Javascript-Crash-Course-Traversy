console.log("hello from console log---");
console.error("this is console error---");
console.warn("this is console warning---");

const name = "john wick";
const age = 20;

console.log("My name is", name, "and I am", age);

console.log("My name is " + name + " and I am " + age);

const hello = `My name is ${name} and I'm ${age}`;
console.log(hello)

const s = "Hi-there!";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split('-'))

const numbers = new Array(1, 23, 4, 43, 231, 43);
console.log(numbers)

const fruits = ['apple', 'mango', 'chikoo'];
console.log(fruits);

console.log(fruits[2]);

fruits[1] = 'strawberry'
console.log(fruits)

fruits.push('banana');
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift('avacado')
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('apple'))

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

console.log(person);
console.log(person.fName, person.lName);
console.log(person.hobbies[1]);
console.log(person.address.street);
const {
    fName,
    lName,
    address: {
        city
    }
} = person;
console.log(fName, lName, city);

person.email = 'babyaga@hitmanforhire.com';
console.log(person)


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
console.log(ToDo);
console.log(ToDo[1].text);

ToDo[2].isCompleted = false;
console.log(ToDo);