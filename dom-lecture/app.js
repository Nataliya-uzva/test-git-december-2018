const page = document.body;

const users = [
    { firstName: 'Vasya', lastName: 'Petrov', age: 30 },
    { firstName: 'Petya', lastName: 'Pupkin', age: 35 },
    { firstName: 'Kolya', lastName: 'Sidorov', age: 15 },
    { firstName: 'Ivan', lastName: 'Ivanov', age: 23 },
    { firstName: 'Roman', lastName: 'Abromovich', age: 50 }
];

// console.log(page.childNodes);
console.log(page.children);
// console.log(page.firstElementChild);
// console.log(page.lastElementChild);
//
// console.log(page.children[0] === page.firstElementChild);

const child = [...page.children];
console.log(child);
//console.log(child[0].nextElementSibling.previousElementSibling);
//console.log(child[0].nextElementSibling);
//console.log(child[0].parentElement.parentElement.parentElement);


//child[1].style.backgroundColor = 'orange';
//
// setTimeout(() => {
//     child[1].style.backgroundColor = 'orange';
// }, 2000);
// setTimeout(() => {
//     child[1].style.backgroundColor = 'lime';
// }, 1000);
//
//
// child[1].style.backgroundColor = 'red';

// setTimeout(() => {
//     // child[1].className += ' lime-color';
//     // child[1].className = 'lime-color';
//     // child[1].className = 'lime-color';
//
//     child[1].classList.add('lime-color');
// }, 1000);
//
// setTimeout(() => {
//     // child[1].className += ' lime-color';
//     // child[1].className = 'lime-color';
//     // child[1].className = 'lime-color';
//
//     child[1].classList.remove('lime-color');
// }, 2000);

function toggleClass() {
    child[1].classList.toggle('lime-color');
}

function renderList(users, elem) {
    const userStr = users.reduce((currentValue, user) => {
        return currentValue + `
            <li>
                Full name: ${user.firstName} ${user.lastName}, Age: ${user.age}
            </li>
        `;
    }, '');

    elem.innerHTML = userStr;
}

// setTimeout(() => {
//     renderList(users, child[3]);
//
// }, 2000);


// console.log(document.getElementById('superDiv'));

// const list = document.getElementsByTagName('ul')[0];
// const list = document.getElementsByClassName('list')[0];
// const listItems = list.getElementsByClassName('list__item');
// const listItems1 = document.getElementsByClassName('list__item');
// // console.log(list);
//
// console.log(listItems);
// console.log(listItems1);

// const list2 = document.querySelector('.list .list__item');
//
// console.log(list2);

const div = document.querySelector('div');

console.log(div.closest('div'));

const duck = document.querySelectorAll('.duck')[1];

console.log(duck.closest('.duck'));
renderList.age = 2.5;


console.log(renderList.age);

document.body.myData = {
    name: 'Петр',
    familyName: 'Петрович'
};

duck.setAttribute('Test', 123);

setTimeout(() => {
    duck.removeAttribute('Test');
    duck.classList.add('lime-color');
    console.log(document.querySelectorAll('.duck')[1]);
}, 2000);


const customDiv = document.createElement('div');

customDiv.textContent = 'Hello first div!!!';

document.querySelector('section').insertBefore(customDiv, document.querySelector('section ul'));








