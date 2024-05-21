// create and export a function named getArticles that returns the articles array.

const API_SERVER = 'http://192.168.1.82:45000';

export const getArticles = () => {
    return fetch(`${API_SERVER}/articles`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
}