const BASE_URL = "https://demo.sibers.com/users";

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

class contactApi {
    constructor(url, { headers }) {
        this._url = url;
        this._headers = headers;
    }

    getContacts() {
        return fetch(this._url, {
            method: 'GET',
        })
            .then(handleResponse)
    }
}

const apiContact = new contactApi(BASE_URL, {
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiContact;