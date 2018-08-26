import { fetchPeopleData } from '../services/peopleList'

export const FETCH_DATA = 'FETCH_DATA'


export const fetchData = () => {
    return function (dispatch){
        fetchPeopleData().then(
            (response) => dispatch({
                type: FETCH_DATA,
                payload: response.data.results
            })
        )
    }
}