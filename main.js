/* ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES 

Video by Brad Traversy
JavaScript Crash Course For Beginners
https://youtu.be/hdI2bqOjy3c?t=4228 

Start at 1:10:29
 */

console.log(document.getElementById('my-form'));

// Newer method:

console.log(document.querySelector('.container'));

const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// Modifying

const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello World!';
ul.children[1].innerHTML = '<strong>Brad</strong>';

// CSS:

const btn = document.querySelector('.btn');
btn.style.background = 'hotpink';

// document.querySelector('body').classList.add('bg-dark');

// Getting results:

const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '') {

        msg.classList.add('error');
        msg.innerHTML = 'Please enter a name.';

        setTimeout(() => msg.remove(), 3000);
    } else console.log('Name entered.');
}