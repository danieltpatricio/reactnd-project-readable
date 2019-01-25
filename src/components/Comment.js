import React,{ Component } from 'react'
import { handleToggleComment } from '../actions/comments'
import { ListItem,ListItemText,Typography,IconButton, Divider} from '@material-ui/core/'
import { formatDate } from '../utils/FormatItems'
import { connect } from 'react-redux'
import DeleteAlert from '../DeleteAlert/DeleteAlert'
import EditAlert from '../EditAlert/EditAlert'

class Post extends Component{
    handleLikeLocal = (e,id,hasLiked) =>{
		const { dispatch } = this.props
        e.preventDefault()
        dispatch(handleToggleComment({
            id: id,
            hasLiked: hasLiked,
        }))
    }

    render(){
        var { item, authedUser } = this.props
        return(
            <div>
                <ListItem> 
                    <div>
                        <ListItemText primary={item.body} secondary={'@'+item.author } />
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
                        {item.author === authedUser &&
                            <div >
                                <EditAlert type={'Comment'} item={item} />
                                <DeleteAlert type={'Comment'} id={item.id}/>
                            </div>
                        }
                    </div>
                </ListItem>
                <Divider variant="middle" />
            </div>   
        )
    }
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser, 
    }
}
export default connect(mapStateToProps) (Post)
