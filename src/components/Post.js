import React from 'react'
import { ListItem,ListItemText,Typography,IconButton} from '@material-ui/core/'
import { formatDate } from '../utils/FormatItems'

export default function Post(props){
    var { item, handleLike } = props
    return(
        <div>
            <ListItem button> 
                <div>
                    <ListItemText primary={item.title + ' (' + item.commentCount + ')'} secondary={'@'+item.author } />
                    <Typography variant="body1">
                        <i className="far fa-calendar-alt"></i> {formatDate(item.timestamp)}
                    </Typography>
                    <div>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={(e) =>handleLike(e,'upVote')} className="btn-green">
                            <i className="far fa-thumbs-up"></i>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={(e) =>handleLike(e,'downVote')} className="btn-red">
                            <i className="far fa-thumbs-down"></i>
                        </IconButton>
                        <label className={item.voteScore !== 0 ? item.voteScore > 0 ?  "text-green" : "text-red" : ""}>{item.voteScore}</label>  
                    </div>
                </div>
            </ListItem>
        </div>
        
    )
}
// 1) Título
// 2) Autor
// 3) Número de comentários
// 4) Pontuação atual
// 5) Mecanismo de voto para votar post com positivo ou negativo
// 6) Mecanismo para ordená-las por data ou pontuação (não obrigatório ter ambos)