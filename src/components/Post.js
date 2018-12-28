import React,{ Component } from 'react'
import { ListItem,ListItemText,Typography,IconButton} from '@material-ui/core/'
import { formatDate } from '../utils/FormatItems'
import { connect } from 'react-redux'
import { handleLike } from '../utils/Global'


class Post extends Component{
    handleLikeLocal = (e,id,hasLiked) =>{
		const { dispatch } = this.props
        handleLike(dispatch, e, id, hasLiked)
    }

    render(){
        var { item } = this.props
        return(
            <div>
                <ListItem button > 
                    <div>
                        <ListItemText primary={item.title + ' (' + item.commentCount + ')'} secondary={'@'+item.author } />
                        <Typography variant="body1">
                            <i className="far fa-calendar-alt"></i> {formatDate(item.timestamp)}
                        </Typography>
                        <div>
                            <IconButton aria-label="Open drawer" onClick={(e) =>this.handleLikeLocal(e,item.id,'upVote')} >
                                <i className="far fa-thumbs-up"></i>
                            </IconButton>
                            <IconButton aria-label="Open drawer" onClick={(e) =>this.handleLikeLocal(e,item.id,'downVote')} >
                                <i className="far fa-thumbs-down"></i>
                            </IconButton>
                            <label className={item.voteScore !== 0 ? item.voteScore > 0 ?  "text-green" : "text-red" : "text-gray"}>{item.voteScore}</label>  
                        </div>
                    </div>
                </ListItem>
            </div>   
        )
    }
}

export default connect() (Post)