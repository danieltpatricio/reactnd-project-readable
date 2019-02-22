import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem,ListItemText,Typography,IconButton, Divider} from '@material-ui/core/'
import { formatDate } from '../utils/FormatItems'
import { connect } from 'react-redux'
import { handleLike } from '../utils/Global'
import DeleteAlert from './DeleteAlert'
import EditAlert from './EditAlert'
import Paper from '@material-ui/core/Paper';


class Post extends Component{
    handleLikeLocal = (e,id,hasLiked) =>{
		const { dispatch } = this.props
        handleLike(dispatch, e, id, hasLiked)
    }

    render(){
        let { authedUser, item } = this.props
        return(
            <div className="post">
                <Paper>
                    <NavLink to={`/${item.category}/${item.id}`}>
                        <ListItem button > 
                            <div>
                                <ListItemText primary={item.title} secondary={'@'+item.author } />
                                <Typography variant="body1">
                                    <i className="far fa-calendar-alt"></i> 
                                    {formatDate(item.timestamp)} 
                                    <br/>
                                    <i className="fas fa-reply"></i> {item.commentCount} comments
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
                            {item.author === authedUser &&
                                <div >
                                    <EditAlert type={'Post'} item={item} />
                                    <DeleteAlert type={'Post'} id={item.id}/>
                                </div>
                            }
                        </ListItem>
                    </NavLink>
                    <Divider variant="middle" />
                </Paper>
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