import {
    RECIVE_CATEGORIES
} from '../actions/categories'

export default function categories (state = [],action){
    switch (action.type) {
        case RECIVE_CATEGORIES:
            return {
                ...state,
                ...action.categories
            }
        default:
            return state
    }
} 