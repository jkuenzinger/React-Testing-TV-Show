import axios from 'axios';

export const fetchShow = () =>{
    return axios
        .get('')
        .then(res =>{
            console.log(res)
            return res;
        })
        .catch(err => {
            console.error('error getting data from api', err.message);
            return err;
        })
}