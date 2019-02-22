import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts'
import { 
    TextField,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    Icon,
    Button,
    Divider  
} from '@material-ui/core/';

class NewPost extends Component{
    state = {
        body: '',
        title: '',
        category: '',
        toHome: false,
    }

    handleChangeCategory = (e) =>{
        const category = e.target.value
        this.setState((c) =>{
            c.category = category
            return c
        })
    }

    handleChangeBody = (e) =>{
        const body = e.target.value
        body.length <= 1000 && this.setState((c) => {
            c.body = body
            return c
        })
    }

    handleChangeTitle = (e) =>{
        const title = e.target.value
        this.setState((c)=>{
            c.title = title
            return c
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const { body, title, category } = this.state
        const { dispatch,authedUser } = this.props
        dispatch(handleAddPost({
            timestamp:Date.now(),
            title,
            body ,
            author: authedUser,
            category
        }))

        this.setState({
            body: '',
            title: '',
            category: '',
            toHome:true,
        })

    }

    render(){
        let { body, title, category, toHome } = this.state
        let  categories   = this.props.categories
        const postLeft = 1000 - body.length

        if (toHome === true ){
            return <Redirect to='/' />
        }

        return(
            <div>
                <h2>Add Post:</h2>
                <Divider/>
                <form onSubmit={this.handleSubmit} className="margin-top">  
                    <FormControl variant="outlined" className="select-category">
                        <InputLabel
                            ref={ref => {
                            this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-native-simple"
                        >
                            Category
                        </InputLabel>
                        <Select
                            native
                            onChange={this.handleChangeCategory}
                            value={category}
                            labelWidth={70}
                            input={
                            <OutlinedInput
                                name="categories"
                            />
                            }
                        >
                            <option value="" />
                            {
                                categories.map((category)=>{
                                    return <option key={category.path}>{category.name}</option>
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label="Title"
                            name="title"
                            value={title}
                            onChange={this.handleChangeTitle}
                            variant="outlined"
                            margin="normal"
                        
                        />
                        
                        <TextField
                            label="Body"
                            name="Body"
                            value={body}
                            onChange={this.handleChangeBody}
                            multiline
                            rows="8"
                            rowsMax="8"
                            variant="outlined"
                            margin="normal"
                        
                        />
                        { (body !== '' &&  postLeft < 50 && postLeft > 0) &&
                            <span className="post-length">{postLeft}</span>
                        }
                    </FormControl> 
                    <div className="center">
                        <Button 
                        variant="contained" 
                        color="primary" 
                        className="btn"
                        type="submit"
                        margin="normal"
                        disabled ={ body === '' || category === '' || title === ''}>
                            Send
                            <Icon>send</Icon>
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps ( { categories, authedUser} ) {
    categories = Object.values(categories)
    return {
        categories,
        authedUser
    } 
}
    
export default connect(mapStateToProps)(NewPost)