import {
    RECIVE_POSTS,
    TOGGLE_POST
} from '../actions/posts'

export default function posts (state = [],action){
    switch (action.type) {
        case RECIVE_POSTS:
            return {
                ...state,
                ...action.posts
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
        default:
            return state
    }
} 