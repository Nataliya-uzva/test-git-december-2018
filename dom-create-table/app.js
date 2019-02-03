const page = document.body;
// const div = page.querySelector('[data-view]');

// page.querySelector('button').onclick = generateTable;
page.querySelector('button').addEventListener('click', generateTable);

function generateTable() {
    // const table = document.createElement('table');
    // const tbody = document.createElement('tbody');

    let count = 0;

    // for (let i = 0; i < 10; i++) {
    //     const tr = document.createElement('tr');
    //     for (let j = 0; j < 10; j++) {
    //         const td = document.createElement('td');
    //         td.textContent = `${count++ + 1}`;
    //         td.dataset.value = td.textContent;
    //         td.addEventListener('click', generateDivText);
    //         tr.appendChild(td);
    //     }
    //     tbody.appendChild(tr);
    // }
    let template = '<table><tbody>';

    for (let i = 0; i < 10; i++) {
        template += `
            <tr>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
                <td data-value='${++count}'>${count}</td>
            </tr>
        `;

        // for (let j = 0; j < 10; j++) {
        //     template += `<td data-value='${count++ + 1}'>
        //         ${count}
        //      </td>
        //     `
        // }
    }

    template += '</tbody></table>';

    console.log(template);

    page.innerHTML += template;

    // page.querySelectorAll('td')
    //     .forEach(td => {
    //         td.addEventListener('click', generateDivText);
    //     });

    page.querySelector('table').addEventListener('click', (/*{ target }*/ event) => {
        const target = event.target;

        if (target.tagName !== 'TD') {

            console.log('we are not here!!!');
            return ;
        }

        page.querySelector('[data-view]').innerHTML = `${target.dataset.value}`;

        target.textContent = !target.textContent
            ? target.dataset.value
            : '';

        // if (target.textContent) {
        //     target.textContent = '';
        // } else {
        //     target.textContent = target.dataset.value;
        // }
    });
}




// console.log(page.querySelectorAll('td'));


// page.querySelector('button').removeEventListener('click', generateTable);

// }


function generateDivText() {
    const elem = this; // элемент на котором произошло событие

    page.querySelector('[data-view]').innerHTML = `${elem.dataset.value}`;

    elem.textContent = !elem.textContent
        ? elem.dataset.value
        : '';

    // elem.removeEventListener('click', generateDivText);
}

