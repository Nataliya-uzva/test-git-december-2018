'use strict';

const viewTemplate = document.querySelector('[data-template="phone-view"]').innerHTML;
let compiledTemplate = _.template(viewTemplate);

class PhoneView extends BaseComponent {
    constructor(options) {
        super(options);
    }

    render(phoneDetails) {
        this._el.innerHTML = compiledTemplate(phoneDetails);
    }
}
