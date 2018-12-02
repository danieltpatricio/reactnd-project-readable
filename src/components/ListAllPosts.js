import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List,ListItem,ListItemText,Tabs,Tab } from '@material-ui/core/';

class ListAllPosts extends Component{
  state = {
    value: 0,
  }
  
  componentDidMount = () =>{
    console.log(this.props.posts)
  }

  handleChange = ( event,value ) => {
    this.setState(currenState =>{
      currenState.value = value
      return currenState
    })
  }

  render(){
    let { value } = this.state;
    let  posts  =  Object.values(this.props.posts)
    return(
      <div>
        <Tabs 
            indicatorColor="primary" 
            value={value} 
            onChange={this.handleChange} 
            scrollable 
            scrollButtons="off"
        >
            <Tab  icon={<i className="far fa-calendar-alt fa-2x "></i>} />
            <Tab  icon={<i className="far fa-thumbs-up fa-2x"></i>} />
        </Tabs>
        <List>
          { 
            posts.map(item => (
              <ListItem key={item.id} button>
                <ListItemText primary={item.title}/>
              </ListItem>   
            ))
          }
        </List>
        </div>
    )
  }
  
}

function mapStateToProps ( posts ) {
  return  posts
}
  
export default connect(mapStateToProps)(ListAllPosts)