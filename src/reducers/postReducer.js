import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

console.log('1. postReducer');


export default function(state = initialState, action) {
    console.log('2. postReducer action ' + JSON.stringify(action))
    switch (action.type) {
        case FETCH_POSTS:
            console.log('7. postReducer - FETCH_POSTS');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            console.log('3. postReducer - switch - default - action.type ' + action.type);
            return state;
    }
}