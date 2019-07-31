// learning DOM

// console.log(window);  // uncomment this and check in console.

// Single Element Slector

console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple Element Selctor

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));