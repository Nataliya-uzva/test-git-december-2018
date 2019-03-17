const API_URL = 'https://Nataliya-uzva.github.io/phones-data/api/';

const HttpService = {
    sendRequest(url) {

        return new Promise((resolve, reject) => {
            let method = 'GET';
            let xhr = new XMLHttpRequest();

            xhr.open(method, API_URL + url, true);
            xhr.send();

            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(new Error(xhr.status + ': ' + xhr.statusText));

                    return;
                }

                let responseData = JSON.parse(xhr.responseText);

                resolve(responseData);
            };

            xhr.onerror = () => {
                reject(new Error(xhr.status + ': ' + xhr.statusText));
            }
        })
    }
};

export default HttpService;
