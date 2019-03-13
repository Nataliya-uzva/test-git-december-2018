'use strict';

class Filter extends BaseComponent {
    constructor(options) {
        super(options); // _el

        const filterElement = this._el.querySelector('[data-element="filter"]');

        filterElement.addEventListener('input', (event) => {

            const phoneFilter = new CustomEvent('phoneFilter', {
                detail: event.target.value // query
            });

            this._el.dispatchEvent(phoneFilter);

        });
    }

}
