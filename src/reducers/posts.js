import {
    RECIVE_POSTS,
    ADD_POST,
    TOGGLE_POST,
    RECIVE_POST
} from '../actions/posts'
import { formatObject } from '../utils/FormatItems'

export default function posts (state = [],action){
    switch (action.type) {
        case RECIVE_POSTS:
            return {
                ...state,
                ...formatObject(action.posts)
            }
        case TOGGLE_POST:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    voteScore: action.hasLiked === 'upVote' 
                    ? state[action.id].voteScore += 1
                    : state[action.id].voteScore -= 1
                }
            }
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case RECIVE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        default:
            return state
    }
} 