import { FETCH_DATA } from '../actions'

const initialState = {
    peopleList : []
}

export const people = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {...state, peopleList: action.payload}
        default:
            return state;
    }
}

