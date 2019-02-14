/* создать одним циклом 10 кнопок, а другим циклом повесить
на них обработчики событий,
таким образом, чтобы при нажатии выводилось сообщение
`Привет я кнопка индекс (вывести индекс этой кнопки)`.
 Так как это задача на замыкание не использовать делегирование. */
'use strict';

const page = document.body;

var funcs = [];

function createfunc(i) {
    return function() {
        const button = document.createElement(`button`);
        button.textContent =`Нажми на меня`;
        page.appendChild(button);

    (function(i){
        button.addEventListener("click", function (e) {
            button.textContent =`Привет, я кнопка ${i + 1}!`;
        }, false);
    })(i);  };
}

for (var i = 0; i < 10; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 10; j++) {
    funcs[j]();
}


