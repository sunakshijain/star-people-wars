import axios from 'axios'


export const fetchPeopleData = () => {
    return axios.get('https://swapi.co/api/people')

}