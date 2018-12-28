import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { handleInitPostPage } from '../actions/shared'
import { handleAddComment } from '../actions/comments';
import { formatDate } from '../utils/FormatItems'
import { handleLike } from '../utils/Global'
import { ListComments } from './ListComments'
import { ListItem, TextField, ListItemText, Typography, IconButton} from '@material-ui/core/'

class PostPage extends Component{
    state = {
        body: '',
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(handleInitPostPage(this.props.match.params.id))

    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const { body } = this.state
        const { dispatch,authedUser } = this.props
        dispatch(handleAddComment({
            timestamp: Date.now(),
            body,
            author: authedUser, 
            parentId: this.props.match.params.id,
        }))

    }

    handleChangeBody = (e) =>{
        const body = e.target.value
        body.length <= 1000 && this.setState((c) => c.body = body)
    }

    handleLikeLocal = (e,id,hasLiked) =>{
		const { dispatch } = this.props
        handleLike(dispatch, e, id, hasLiked)
    }
    
    render(){
        let { body } = this.state
        let { post,comments } = this.props
        const postLeft = 1000 - body.length

        return post
        ? (
            <div>
                <ListComments/>
                <h2>{post ? post.title : ""}</h2>
                <div className="post-box">
                    <ListItem> 
                        <div>
                            <ListItemText secondary={'@'+post.author } primary={post.body}  />
                            <Typography variant="body1">
                                <i className="far fa-calendar-alt"></i> {formatDate(post.timestamp)}
                            </Typography>
                            <div>
                                <IconButton aria-label="Open drawer" onClick={(e) =>this.handleLikeLocal(e,post.id,'upVote')} >
                                    <i className="far fa-thumbs-up"></i>
                                </IconButton>
                                <IconButton aria-label="Open drawer" onClick={(e) =>this.handleLikeLocal(e,post.id,'downVote')} >
                                    <i className="far fa-thumbs-down"></i>
                                </IconButton>
                                <label className={post.voteScore !== 0 ? post.voteScore > 0 ?  "text-green" : "text-red" : "text-gray"}>{post.voteScore}</label>  
                            </div>
                        </div>
                    </ListItem>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Body"
                        name="Body"
                        value={body}
                        onChange={this.handleChangeBody}
                        multiline
                        fullWidth
                        rows="6"
                        rowsMax="6"
                        variant="outlined"
                        margin="normal"
                    
                    />
                    { (body !== '' &&  postLeft < 50 && postLeft > 0) &&
                        <span className="post-length">{postLeft}</span>
                    }

                    <button 
                    className="btn"
                    type="submit"
                    disabled ={ body === '' }
                    >
                    Post
                    </button>
                </form>
            </div>
        )
        : (<h2>o post foi deletado ou nao existe</h2>)
    }
}

function mapStateToProps({ authedUser, posts},props) {
    const { id } = props.match.params
    const post = Object.values(posts).filter((post) => post.id === id)[0]
    return {
        loading: authedUser === null,
        post,
    }
}       

export default connect(mapStateToProps) (PostPage)

// Os detalhes da postagem estão disponíveis em /:category/:post_id OK

// A postagem é exibida com os seguintes itens:
// 1) Título OK
// 2) Corpo OK 
// 3) Autor OK 
// 4) Número de comentários
// 5) Pontuação atual OK
// 6) Mecanismo de voto para votar positiva ou negativamente o post OK 
// 7) Botões ou links para que o post possa ser editado ou removido.

// Comentários listados são exibidos com os seguintes itens:
// 1) Autor
// 2) Pontuação atual
// 3) Mecanismo de voto para votar positiva ou negativamente o comentário

// O mecanismo de voto funciona e exibe corretamente a nova pontuação de votos ao clicar para votar na postagem e nos comentários.

// Todos os comentários de uma postagem são exibidos abaixo do corpo de texto da postagem.

// Um mecanismo para a adição de novos comentários está visível na página de detalhes e funciona.

// componentDidMount(){
// }