import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { TextField, FormControl, InputLabel, Select, OutlinedInput  } from '@material-ui/core/';

class NewPost extends Component{
    state = {
        body: '',
        title: ''
    }

    handleChangeBody = (e) =>{
        const body = e.target.value
        this.setState((c) => c.body = body)
    }

    handleChangeTitle = (e) =>{
        const title = e.target.value
        this.setState((c)=> c.title = title)
    }

    handleSubmit = (e) =>{
        console.log(e)
        e.preventDefault()
        const { body, title } = this.state
        const { dispatch } = this.props
        dispatch(handleAddPost({
            // timestamp:,
            title,
            body ,
            // author: authedUser,
            // category
        }))

        this.setState({ body:'' })

    }

    render(){
        let { body, title } = this.state
        let  categories   = Object.values(this.props.categories)
        const postLeft = 500 - body.length

        return(
            <div>
                <h2>Compose New Post:</h2>
                <form onSubmit={this.handleSubmit}>  
                    <FormControl variant="outlined">
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
                    <TextField
                        label="Title"
                        name="title"
                        value={title}
                        onChange={this.handleChangeTitle}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Body"
                        name="Body"
                        value={body}
                        onChange={this.handleChangeBody}
                        multiline
                        rows="10"
                        fullWidth
                        rowsMax="5"
                        margin="normal"
                        variant="outlined"
                    />
                    
                    <h2>{postLeft}</h2>

                    <button 
                    className="btn"
                    type="submit"
                    disabled ={ body === ''}
                    >
                    Post
                    </button>
                </form>
                
            </div>
        )
    }
}

function mapStateToProps ( categories ) {
    return categories 
}
    
export default connect(mapStateToProps)(NewPost)