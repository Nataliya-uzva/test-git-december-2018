const page = document.body;
const div = page.querySelector('div');

// page.querySelector('button').onclick = generateTable;
page.querySelector('button').addEventListener('click', generateTable);

function generateTable() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    let count = 0;

    for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
            td.textContent = `${count++ + 1}`;
            td.dataset.value = td.textContent;
            td.addEventListener('click', generateDivText);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    page.appendChild(table);

page.querySelector('button').removeEventListener('click', generateTable);

}


function generateDivText() {
    const elem = this; // элемент на котором произошло событие
    
    div.innerHTML = `${elem.dataset.value}`;

    elem.textContent = !elem.textContent
        ? elem.dataset.value
        : '';

    // elem.removeEventListener('click', generateDivText);
}

