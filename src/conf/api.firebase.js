import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://films-1284a.firebaseio.com/'
});

export default apiFirebase;