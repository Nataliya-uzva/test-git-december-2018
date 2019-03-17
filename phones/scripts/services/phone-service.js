'use strict';

import HttpService from '../common/services/http-service.js';

const PhoneService = {
    getAll({ query = '', order = '' } = {}) {

        return HttpService.sendRequest('phones.json')
            .then(phones => {
                let filteredPhones = this._filter(phones, query);
                let sortedPhones = this._sort(filteredPhones, order);

                return sortedPhones;
            })
    },

    get(phoneId) {
        return HttpService.sendRequest(`phones/${phoneId}.json`);
    },


    _filter(phones, query) {
        if (!query) {
            return phones;
        }

        let normalizedQuery = query.toLocaleLowerCase();

        return phones.filter((phone) => {
            return phone.name.toLocaleLowerCase().includes(normalizedQuery);
        });
    },

    _sort(phones, orderField) {
        return phones.sort((phoneA, phoneB) => {
            return (phoneA[orderField] > phoneB[orderField])
                ? 1
                : -1;
        });
    }
};

export default PhoneService;
