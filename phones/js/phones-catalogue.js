'use strict';

let template = document.querySelector('[data-template="phones-catalogue"]').innerHTML;
let compiledTemplateCatalogue = _.template(template);

const SORT_TYPE_ALPHABETICAL = 'name';
const SORT_TYPE_NEWEST = 'age';

class PhonesCatalogue extends BaseComponent {
    constructor(options) {

        super(options); // _el

        this._defaultPhones = options.phones;
        this._render(options.phones);

        this._el.addEventListener('click', (event) => {
            if (!event.target.closest('[data-element="phoneLink"]')) {
                return;
            }

            event.preventDefault();

            const phoneId = event.target.closest('[data-element="phoneId"]').dataset.id;
            let phoneSelected = new CustomEvent('phoneSelected', {
                detail: phoneId
            });

            this._el.dispatchEvent(phoneSelected);
        })
    }

    filterData(query) {
        const formQuery = query.toLocaleLowerCase();
        const filterPhones = this._defaultPhones
            .filter((phone) => {
                return phone.name.toLocaleLowerCase().includes(formQuery);
            });

        this._render(filterPhones);
    }

    sortPhones(type) {

        console.log(type);
        if (type === SORT_TYPE_ALPHABETICAL) {
            this._render(this._alphaPhones());
        }

        if (type === SORT_TYPE_NEWEST) {
            this._render(this._newPhones());
        }
    }

    _render(phones) {
        this._el.innerHTML = compiledTemplateCatalogue({ phones });

        // let view = '<ul class="phones">';
        //
        // view += phones
        //     .reduce((pre, phone) => {
        //         return pre += `
        //             <li data-element="phoneId" data-id="${phone.id}" class="thumbnail">
        //               <a data-element="phoneLink" class="thumb">
        //                 <img alt="${phone.name}" src="${phone.imageUrl}">
        //               </a>
        //               <a data-element="phoneLink" href="#">${phone.name}</a>
        //               <p>${phone.snippet}</p>
        //             </li>
        //         `;
        //     }, '');
        //
        //
        // view += '</ul>';
        //
        // this._el.innerHTML = view;
    }

    _alphaPhones() {

        return this._defaultPhones.sort((phone1, phone2) => {
            if (phone1['name'] > phone2['name']) return 1;
            if (phone1['name'] < phone2['name']) return -1;
        });
    }

    _newPhones() {
        return this._defaultPhones.sort((phone1, phone2) => {
            if (phone1['age'] > phone2['age']) return 1;
            if (phone1['age'] < phone2['age']) return -1;
        });
    }
}
