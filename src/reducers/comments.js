import {
    RECEIVE_COMMENTS,
    ADD_COMMENT,
    TOGGLE_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
} from '../actions/comments'
import { formatObject } from '../utils/FormatItems'

export default function posts (state = [],action){
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                ...formatObject(action.comments)
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case TOGGLE_COMMENT:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    voteScore: action.hasLiked === 'upVote' 
                    ? state[action.id].voteScore += 1
                    : state[action.id].voteScore -= 1
                }
            }
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]:{
                    ...state[action.comment.id],
                    timestamp: action.comment.timestamp,
                    body: action.comment.body,
                }
            }
        case DELETE_COMMENT:
            return formatObject(Object.values(state).filter(item => item.id !== action.id))
        default:
            return state
    }
} 