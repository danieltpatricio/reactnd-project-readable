import {
    RECEIVE_POSTS,
    ADD_POST,
    TOGGLE_POST,
    RECEIVE_POST,
    DELETE_POST,
    EDIT_POST,
    ADD_COMMENT_COUNT,
    SUB_COMMENT_COUNT,
} from '../actions/posts'
import { formatObject } from '../utils/FormatItems'

export default function posts (state = [],action){
    switch (action.type) {
        case RECEIVE_POSTS:
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
        case ADD_POST :
        case RECEIVE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case EDIT_POST:
            return {
                ...state,
                [action.post.id]:{
                    ...state[action.post.id],
                    title: action.post.title,
                    body: action.post.body
                }
            }
        case DELETE_POST:
            return formatObject(Object.values(state).filter(item => item.id !== action.id))
        case ADD_COMMENT_COUNT:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    commentCount:(state[action.id].commentCount+1)
                }
            }
        case SUB_COMMENT_COUNT:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    commentCount:(state[action.id].commentCount-1)
                }
            }
        default:
            return state
    }
} 