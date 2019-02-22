import React, { Component } from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core/';
import { Face } from '@material-ui/icons';
import { setAuthedUser } from '../actions/autheduser';
import { connect } from 'react-redux';

class ChangeUser extends Component{
    state ={
        username: "",
        open: false,
    }
    
    handleOpen = (e) => {
        e.preventDefault()
        this.setState({
            open : true,
            username: this.props.authedUser
        });
    };

    handleClose = (e) => {
        e.preventDefault()
        this.setState({
            open : false,
        });
    };

    handleChangeUsername = (e) =>{
        e.preventDefault()       
        const username = e.target.value
        this.setState((c)=>{
            c.username = username
            return c
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.username))
        this.handleClose(e)
    }

    render(){
        let { open, username } = this.state
        return (
            <div>
                <Face onClick={this.handleOpen}/>
                <Dialog
                open={open}
                onClick={(e)=>e.preventDefault()}
                onClose={this.handleClose}
                aria-labelledby="dialog-title">
                    <DialogTitle id="dialog-title">Edit Username</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <TextField
                                label="Username"
                                name="Username"
                                fullWidth
                                value={username}
                                onChange={this.handleChangeUsername}
                                variant="outlined"
                                margin="normal"
                            />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button 
                            onClick={(e)=>this.handleSubmit(e)} 
                            autoFocus
                            disabled ={ username === ''}
                        >
                            Update 
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


function mapStateToProps({authedUser}) {
	return { authedUser }
}

export default connect(mapStateToProps) (ChangeUser);