import axios from 'axios'

export default () => axios.create({
    baseURL: 'https://casamentov2.herokuapp.com/api/'
    //baseURL: 'http://localhost:3000/api/'
});