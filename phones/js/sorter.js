'use strict';

class Sorter extends BaseComponent {
    constructor(options) {
        super(options); // _el

        const sorterElement = this._el.querySelector('[data-element="sorter"]');

        sorterElement.addEventListener('change', (event) => {

            const phoneSorter = new CustomEvent('phoneSorter', {
                detail: event.target.value
            });

            this._el.dispatchEvent(phoneSorter);

        });
    }
}
