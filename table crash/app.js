'use strict';

const page = document.body;

const button = document.createElement('button');
button.textContent = 'Start crash table!';
page.appendChild(button);

const createTable = () => {

    const table = document.createElement('table');

    const body = document.createElement('tbody');

    body.appendChild(document.createElement('tr'));

    for (let i = 1; i <= 100; i++) {
        const td = document.createElement('td');
        td.textContent = `${i}`;
        body.lastChild.appendChild(td);

        if (i % 10 === 0) {
            body.appendChild(document.createElement('tr'));
        }
    }

    table.appendChild(body);
    page.appendChild(table);

    table.style.position = 'absolute';
    table.style.left = (document.documentElement.clientWidth/2) - (table.clientWidth/2) + 'px';
    table.style.top = (document.documentElement.clientHeight/2) - (table.clientHeight/2) + 'px';

    explosion();
};

const tableLogic = () => {
    if (!page.querySelector('table')) {
        createTable();
     button.textContent = 'stop this mess!!!';

        return;
    }

    clearInterval(timer); // остановка запуска перерисовки нашей таблицы
}

button.addEventListener('click', tableLogic);
let timer;

const getColor = () => {
    const r = Math.round(254 * Math.random()).toString(16);
    const g = Math.round(254 * Math.random()).toString(16);
    const b = Math.round(254 * Math.random()).toString(16);
    return '#' + r + g + b; // HEX
};

const rand =(min, max) => {//ТОЛЬКО для целых чисел положительных
    min = min || 0;
    max = max + 1 || 1;
    let rnd = 0;
    do rnd = Math.floor((Math.random() * (max - min)) + min)
    while (rnd == 0);
    return rnd;
};

const animate = (config) => {
    timer = setInterval(() => {
        for (let i = 0; i <  config.length; i++) {
            config[i].td.style.top = (config[i].directionTop > 0)
                ? (parseInt(config[i].td.style.top) - config[i].speed + 'px')
                : (parseInt(config[i].td.style.top) + config[i].speed + 'px');

            config[i].td.style.left = (config[i].directionLeft > 0)
                ? (parseInt(config[i].td.style.left) - config[i].speed + 'px')
                : (parseInt(config[i].td.style.left) + config[i].speed + 'px');

            if (config[i].td.getBoundingClientRect().top <= 0 ||
                config[i].td.getBoundingClientRect().bottom >= screen.height) {
                config[i].directionTop = (-1) * config[i].directionTop;
                config[i].speed = rand(1, 5);
                config[i].td.style.backgroundColor = getColor();
            }
            if (config[i].td.getBoundingClientRect().left <= 0 ||
                config[i].td.getBoundingClientRect().right >= screen.width) {
                config[i].directionLeft = (-1) * config[i].directionLeft;
                config[i].speed = rand(1, 5);
                config[i].td.style.backgroundColor = getColor();
            }
        }
    }, 50);
}

const  explosion = () => {
    const tds = document.querySelectorAll('td');
    const config = [];

    for (let j = 0; j <  tds.length; j++) {
        config.push({
            td: tds[j], // ссылка на элемент
            top: tds[j].offsetTop, // верхний отступ от края экрана
            left: tds[j].offsetLeft, // отступ слево от края экрана
            directionTop: rand(-1, 1), // направление вверх либо вниз
            directionLeft: rand(-1, 1), // направление влево либо вправо
            speed: rand(1, 3), // скорость
        });
    }

    for (let i = 0; i <  tds.length; i++) {
        tds[i].style.position = 'absolute';
        tds[i].style.top = config[i].top + "px";
        tds[i].style.left = config[i].left + "px";
    }

    animate(config);
}

