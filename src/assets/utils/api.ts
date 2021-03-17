import axios from 'axios';

export const PostAPI = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res;
    })
    .catch((e) => console.log(e));
