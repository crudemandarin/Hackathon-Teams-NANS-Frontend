const BASE_URL = "http://localhost:5000/"

export default class ApiService {
    getTest() {
        return fetch(BASE_URL + 'ping');
    }

    getTextbookSearchResults( query ) {
        return fetch(BASE_URL + 'textbook-search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { 'message': query } )
        } );
    }
};