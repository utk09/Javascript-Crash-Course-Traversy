// learning DOM

// console.log(window);  // uncomment this and check in console.

// Single Element Slector

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple Element Selctor

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello World!';
// ul.children[1].innerText = 'Zumba';
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'rgb(88, 4, 99)';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Button Clicked!');
//     console.log(e);
//     console.log(e.target);
//     document.querySelector('#my-form').style.background = '#e4c4a4';
//     document.querySelector('body').classList.add('bg-dark');
// })


// const btn2 = document.querySelector('.btn');

// btn2.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log('Button Clicked!');
//     console.log(e);
//     console.log(e.target);
//     document.querySelector('#my-form').style.background = '#e4c4a4';
//     document.querySelector('body').classList.add('bg-dark');
// })

// const btn3 = document.querySelector('.btn');

// btn3.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log('Button Clicked!');
//     console.log(e);
//     console.log(e.target);
//     document.querySelector('#my-form').style.background = '#e4c4a4';
//     document.querySelector('body').classList.add('bg-dark');
// })

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const usrList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        console.log('Failed!')
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(), 1000);
    } else {
        // setTimeout(() => msg.remove(), 100);
        console.log("Success!")
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        usrList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}