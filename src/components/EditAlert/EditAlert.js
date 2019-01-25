import React, { Component } from 'react'
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core/'
import Create from '@material-ui/icons/Create'
import { handleEditPost } from '../../actions/posts'
import { handleEditComment } from '../../actions/comments'
import { connect } from 'react-redux'




class EditAlert extends Component{
    state ={
        title: this.props.item.title,
        body: this.props.item.body,
        open: false,
    }

    handleChangeBody = (e) =>{
        e.preventDefault()
        const body = e.target.value
        body.length <= 1000 && this.setState((c) => {
            c.body = body
            return c
        })
    }

    handleChangeTitle = (e) =>{
        e.preventDefault()       
        const title = e.target.value
        this.setState((c)=>{
            c.title = title
            return c
        })
    }
    
    handleOpen = (e) => {
        e.preventDefault()
        this.setState((c)=>{
            c.open = true
            return c
        });
    };
    
    handleClose = (e) => {
        e.preventDefault()
        this.setState((c)=>{
            c.open = false
            return c
        });
    };

    handleEdit = (e)=>{
        e.preventDefault()
        const { dispatch, type } = this.props
        const { id } = this.props.item
        const { title, body } = this.state
        if(type === 'Post'){
            const post = {
                title,
                body,
                id,
            } 
            dispatch(handleEditPost(post)) 
        }
        if(type === 'Comment'){
            const comment = {
                body,
                id,
                timestamp: Date.now(),
            }
            dispatch(handleEditComment(comment))
        }
        this.handleClose(e)
    }

    render(){    
        let { open, title, body } = this.state
        const { type } = this.props
        return (
            <div>
                <Create className="icon-edit text-gray"  onClick={this.handleOpen}/>
                <Dialog
                open={open}
                onClick={(e)=>e.preventDefault()}
                onClose={this.handleClose}
                aria-labelledby="dialog-title">
                    <DialogTitle id="dialog-title">Edit {type}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {type !== 'Comment' &&
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={title}
                                    onChange={this.handleChangeTitle}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                />
                            }
                            <TextField
                                label="Body"
                                name="Body"
                                fullWidth
                                value={body}
                                onChange={this.handleChangeBody}
                                multiline
                                rows="8"
                                rowsMax="8"
                                variant="outlined"
                                margin="normal"
                            />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={(e)=>this.handleEdit(e)}  autoFocus>
                        Edit 
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default connect() (EditAlert);