import {
    RECIVE_COMMENTS,
    ADD_COMMENT,
} from '../actions/comments'
import { formatObject } from '../utils/FormatItems'

export default function posts (state = [],action){
    switch (action.type) {
        case RECIVE_COMMENTS:
            return {
                ...state,
                ...formatObject(action.comments)
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        default:
            return state
    }
} 