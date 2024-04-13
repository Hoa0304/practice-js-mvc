import axios from 'axios';

const host = 'https://json-server-amn3.onrender.com/';

export default axios.create({
    baseURL: host,
});
